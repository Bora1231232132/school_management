#!/usr/bin/env bash
# ==============================================================================
# 🚀 ZERO-DOWNTIME DOCKER DEPLOYMENT & HEALTH VERIFICATION SCRIPT
# Project: School Management System (Chea Chanto College)
# ==============================================================================
# This script executes a hardened zero-downtime deployment:
# 1. Enforces strict file permissions on .env (chmod 600)
# 2. Ensures TLS certificates are present
# 3. Pulls latest code changes (unless --skip-pull is passed)
# 4. Validates Docker Compose syntax
# 5. Performs zero-orphan container build and recreation
# 6. Runs 2-Tier automated health checks:
#    - Tier 1: PostgreSQL readiness (pg_isready)
#    - Tier 2: Nginx / Web HTTPS service readiness (curl HTTP status check)
# 7. Prunes dangling Docker images to maintain disk capacity
#
# Usage:
#   ./scripts/deploy.sh              # Standard deploy (git pull + build + verify)
#   ./scripts/deploy.sh --skip-pull  # Deploy without pulling git repository
# ==============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "$PROJECT_DIR"

# ─── Options & Flags ─────────────────────────────────────────────────────────
SKIP_PULL=false
for arg in "$@"; do
  case $arg in
    --skip-pull|--no-pull)
      SKIP_PULL=true
      shift
      ;;
    -h|--help)
      echo "Usage: ./scripts/deploy.sh [--skip-pull]"
      exit 0
      ;;
  esac
done

# ─── Colors and Formatting ───────────────────────────────────────────────────
if [ -t 1 ]; then
  BOLD="\033[1m"
  GREEN="\033[1;32m"
  YELLOW="\033[1;33m"
  BLUE="\033[1;34m"
  CYAN="\033[1;36m"
  RED="\033[1;31m"
  DIM="\033[2m"
  RESET="\033[0m"
else
  BOLD="" GREEN="" YELLOW="" BLUE="" CYAN="" RED="" DIM="" RESET=""
fi

log_step() {
  echo -e "\n${BLUE}▶ [STEP]${RESET} ${BOLD}$1${RESET}"
}

log_info() {
  echo -e "  ${CYAN}ℹ${RESET} $1"
}

log_pass() {
  echo -e "  ${GREEN}✔ [PASS]${RESET} $1"
}

log_warn() {
  echo -e "  ${YELLOW}⚠ [WARN]${RESET} $1"
}

log_fail() {
  echo -e "  ${RED}✖ [FAIL]${RESET} $1"
  exit 1
}

echo -e "\n${CYAN}==============================================================================${RESET}"
echo -e "${BOLD}🚀 PRODUCTION DEPLOYMENT & HEALTH VERIFICATION${RESET}"
echo -e "${DIM}Repository: ${PROJECT_DIR}${RESET}"
echo -e "${CYAN}==============================================================================${RESET}"

# ─── STEP 1: Secret Permissions & Environment Check ──────────────────────────
log_step "1/6 Verifying environment configuration and permissions"
if [ ! -f .env ]; then
  if [ -f .env.example ]; then
    log_fail ".env file not found! Create one from the template:\n      cp .env.example .env && chmod 600 .env"
  else
    log_fail ".env file is missing and no template was found."
  fi
fi

# Enforce strict 600 permissions on secret file
chmod 600 .env
ENV_PERMS=$(stat -c "%a" .env 2>/dev/null || stat -f "%OLp" .env 2>/dev/null || echo "600")
log_pass ".env permissions enforced (mode: ${ENV_PERMS})"

# ─── STEP 2: TLS Certificate Verification ─────────────────────────────────────
log_step "2/6 Ensuring TLS/SSL certificates are configured"
if [ -f "./setup-certs.sh" ]; then
  chmod +x ./setup-certs.sh
  ./setup-certs.sh
  log_pass "TLS certificates verified"
else
  log_info "setup-certs.sh not present; skipping local cert generator."
fi

# ─── STEP 3: Git Synchronization ──────────────────────────────────────────────
log_step "3/6 Checking source repository synchronization"
if [ "$SKIP_PULL" = true ]; then
  log_info "--skip-pull flag detected. Skipping git fetch/pull."
else
  if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD || echo "main")
    log_info "Syncing latest commits on branch: ${CURRENT_BRANCH}..."
    git fetch origin "${CURRENT_BRANCH}"
    git merge --ff-only "origin/${CURRENT_BRANCH}" || git reset --hard "origin/${CURRENT_BRANCH}"
    log_pass "Git repository synced at commit: $(git rev-parse --short HEAD)"
  else
    log_warn "Not a git repository or detached tree. Skipping pull."
  fi
fi

# ─── STEP 4: Docker Compose Validation ────────────────────────────────────────
log_step "4/6 Validating Docker Compose configuration syntax"
if ! docker compose config -q; then
  log_fail "docker compose configuration validation failed! Check docker-compose.yml and .env"
fi
log_pass "Docker Compose syntax valid"

# ─── STEP 5: Container Build & Launch (Zero-Orphan) ───────────────────────────
log_step "5/6 Building and launching containers (--remove-orphans)"
docker compose up -d --build --remove-orphans
log_pass "Containers launched successfully"

# ─── STEP 6: 2-Tier Automated Health Checks ───────────────────────────────────
log_step "6/6 Executing automated 2-tier health checks"

# Tier 1: PostgreSQL Health Check
echo -e "  ${BOLD}Tier 1: PostgreSQL Database Readiness Check...${RESET}"
POSTGRES_CONTAINER=$(docker compose ps -q postgres 2>/dev/null || echo "")
if [ -n "$POSTGRES_CONTAINER" ]; then
  PG_READY=false
  for i in $(seq 1 30); do
    if docker compose exec -T postgres sh -c 'pg_isready -U "${POSTGRES_USER:-postgres}" -d "${POSTGRES_DB:-school_db}"' >/dev/null 2>&1; then
      PG_READY=true
      break
    fi
    sleep 1
  done

  if [ "$PG_READY" = true ]; then
    log_pass "PostgreSQL is accepting connections (attempt ${i}/30)"
  else
    log_warn "PostgreSQL healthcheck did not report ready within 30s. Checking logs..."
    docker compose logs --tail=20 postgres
    log_fail "Database health check failed!"
  fi
else
  log_info "PostgreSQL container not found in compose services, skipping Tier 1 check."
fi

# Tier 2: Nginx / Web HTTPS Health Check
echo -e "  ${BOLD}Tier 2: Web Server HTTPS Readiness Check...${RESET}"
WEB_READY=false
HTTP_CODE="000"
for i in $(seq 1 30); do
  # Probe localhost port 443 (HTTPS) and port 80 (HTTP)
  HTTP_CODE=$(curl -k -s -o /dev/null -w "%{http_code}" https://127.0.0.1/ || curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1/ || echo "000")
  if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    WEB_READY=true
    break
  fi
  sleep 1
done

if [ "$WEB_READY" = true ]; then
  log_pass "Web frontend is responsive (HTTP status: ${HTTP_CODE}, attempt ${i}/30)"
else
  log_warn "Web frontend returned HTTP ${HTTP_CODE} instead of 200/301/302 after 30s."
  docker compose logs --tail=20 school-web || true
  log_fail "Web tier health check failed!"
fi

# ─── Post-Deployment Hygiene: Prune Dangling Images ──────────────────────────
echo -e "\n${DIM}Cleaning up dangling Docker images to preserve disk space...${RESET}"
docker image prune -f >/dev/null 2>&1 || true

# ─── Summary Report ──────────────────────────────────────────────────────────
echo -e "\n${CYAN}==============================================================================${RESET}"
echo -e "${BOLD}${GREEN}✅ DEPLOYMENT SUCCEEDED & VERIFIED HEALTHY${RESET}"
echo -e "${CYAN}==============================================================================${RESET}"
docker compose ps
echo ""


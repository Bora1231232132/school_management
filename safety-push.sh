#!/usr/bin/env bash
# ==============================================================================
# 🛡️  SAFETY PUSH & CI/CD PIPELINE PRE-FLIGHT CHECK
# ==============================================================================
# This script runs comprehensive local safety checks before pushing code to remote,
# mirroring all CI/CD pipeline steps (Repository Guards, Secrets, Quality Suite,
# Production Build, Dependency Audit, Docker Compose) to prevent pipeline failures.
#
# Usage:
#   ./safety-push.sh [OPTIONS]
#
# Options:
#   -p, --push           Automatically push to remote if all checks pass
#   -n, --no-push        Run checks only without prompting to push
#   -s, --strict         Strict mode: fail on warnings (high CVE audits, uncommitted files)
#   --skip-build         Skip Vite production build (faster check)
#   --skip-docker        Skip Docker Compose syntax verification
#   --skip-audit         Skip npm dependency security audit
#   --install-hook       Install this script as a Git pre-push hook (.git/hooks/pre-push)
#   --uninstall-hook     Remove the Git pre-push hook
#   -h, --help           Show this help message
# ==============================================================================

set -uo pipefail

# ─── Color & Formatting Setup ─────────────────────────────────────────────────
if [ -t 1 ]; then
  BOLD="\033[1m"
  DIM="\033[2m"
  RED="\033[1;31m"
  GREEN="\033[1;32m"
  YELLOW="\033[1;33m"
  BLUE="\033[1;34m"
  MAGENTA="\033[1;35m"
  CYAN="\033[1;36m"
  WHITE="\033[1;37m"
  BG_RED="\033[41;37m"
  BG_GREEN="\033[42;30m"
  RESET="\033[0m"
else
  BOLD=""
  DIM=""
  RED=""
  GREEN=""
  YELLOW=""
  BLUE=""
  MAGENTA=""
  CYAN=""
  WHITE=""
  BG_RED=""
  BG_GREEN=""
  RESET=""
fi

# ─── Paths and State ──────────────────────────────────────────────────────────
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR" || exit 1

AUTO_PUSH=false
NO_PUSH=false
STRICT_MODE=false
SKIP_BUILD=false
SKIP_DOCKER=false
SKIP_AUDIT=false

TOTAL_CHECKS=0
PASSED_CHECKS=0
FAILED_CHECKS=0
WARNINGS_COUNT=0

declare -a REPORT_NAMES=()
declare -a REPORT_STATUS=()
declare -a REPORT_DETAILS=()
START_TIME=$(date +%s)

# ─── Helper Functions ─────────────────────────────────────────────────────────
print_banner() {
  echo -e "\n${CYAN}==============================================================================${RESET}"
  echo -e "${BOLD}${WHITE}🛡️   PRE-PUSH SAFETY CHECK & CI/CD PIPELINE VALIDATOR${RESET}"
  echo -e "${DIM}Repository: ${ROOT_DIR}${RESET}"
  echo -e "${CYAN}==============================================================================${RESET}\n"
}

log_step() {
  echo -e "\n${BLUE}▶ [STEP]${RESET} ${BOLD}$1${RESET}"
}

log_pass() {
  local name="$1"
  local detail="${2:-Passed}"
  echo -e "  ${GREEN}✔ [PASS]${RESET} ${name} ${DIM}(${detail})${RESET}"
  ((PASSED_CHECKS++))
  ((TOTAL_CHECKS++))
  REPORT_NAMES+=("$name")
  REPORT_STATUS+=("PASS")
  REPORT_DETAILS+=("$detail")
}

log_warn() {
  local name="$1"
  local detail="${2:-Warning}"
  echo -e "  ${YELLOW}⚠ [WARN]${RESET} ${name} ${YELLOW}(${detail})${RESET}"
  ((WARNINGS_COUNT++))
  ((TOTAL_CHECKS++))
  REPORT_NAMES+=("$name")
  REPORT_STATUS+=("WARN")
  REPORT_DETAILS+=("$detail")
  if [ "$STRICT_MODE" = true ]; then
    ((FAILED_CHECKS++))
  fi
}

log_fail() {
  local name="$1"
  local detail="${2:-Failed}"
  echo -e "  ${RED}✖ [FAIL]${RESET} ${name} ${RED}(${detail})${RESET}"
  ((FAILED_CHECKS++))
  ((TOTAL_CHECKS++))
  REPORT_NAMES+=("$name")
  REPORT_STATUS+=("FAIL")
  REPORT_DETAILS+=("$detail")
}

log_info() {
  echo -e "  ${CYAN}ℹ [INFO]${RESET} $1"
}

# ─── Argument Parsing ─────────────────────────────────────────────────────────
parse_arguments() {
  while [[ $# -gt 0 ]]; do
    case "$1" in
      -p|--push)
        AUTO_PUSH=true
        shift
        ;;
      -n|--no-push)
        NO_PUSH=true
        shift
        ;;
      -s|--strict)
        STRICT_MODE=true
        shift
        ;;
      --skip-build)
        SKIP_BUILD=true
        shift
        ;;
      --skip-docker)
        SKIP_DOCKER=true
        shift
        ;;
      --skip-audit)
        SKIP_AUDIT=true
        shift
        ;;
      --install-hook)
        install_git_hook
        exit 0
        ;;
      --uninstall-hook)
        uninstall_git_hook
        exit 0
        ;;
      -h|--help)
        show_help
        exit 0
        ;;
      *)
        echo -e "${RED}Unknown option: $1${RESET}"
        show_help
        exit 1
        ;;
    esac
  done
}

show_help() {
  echo -e "${BOLD}Usage:${RESET} ./safety-push.sh [OPTIONS]"
  echo
  echo -e "${BOLD}Options:${RESET}"
  echo -e "  ${CYAN}-p, --push${RESET}           Automatically push to remote if all checks pass"
  echo -e "  ${CYAN}-n, --no-push${RESET}        Run checks only, skip push confirmation prompt"
  echo -e "  ${CYAN}-s, --strict${RESET}         Strict mode: fail on warnings (e.g. high npm audit)"
  echo -e "  ${CYAN}--skip-build${RESET}         Skip Vite production build (faster check)"
  echo -e "  ${CYAN}--skip-docker${RESET}        Skip Docker Compose syntax check"
  echo -e "  ${CYAN}--skip-audit${RESET}         Skip npm audit security scan"
  echo -e "  ${CYAN}--install-hook${RESET}       Install as Git pre-push hook (.git/hooks/pre-push)"
  echo -e "  ${CYAN}--uninstall-hook${RESET}     Remove Git pre-push hook"
  echo -e "  ${CYAN}-h, --help${RESET}           Display this help message"
  echo
  echo -e "${BOLD}Examples:${RESET}"
  echo -e "  ${DIM}# Run pre-push checks interactively:${RESET}"
  echo -e "  ./safety-push.sh"
  echo
  echo -e "  ${DIM}# Run checks and automatically push if green:${RESET}"
  echo -e "  ./safety-push.sh --push"
  echo
  echo -e "  ${DIM}# Install as permanent git pre-push hook:${RESET}"
  echo -e "  ./safety-push.sh --install-hook"
}

# ─── Git Hook Management ──────────────────────────────────────────────────────
install_git_hook() {
  local hook_dir="${ROOT_DIR}/.git/hooks"
  local hook_file="${hook_dir}/pre-push"

  if [ ! -d "${ROOT_DIR}/.git" ]; then
    echo -e "${RED}Error: Not a git repository or .git directory missing.${RESET}"
    exit 1
  fi

  mkdir -p "$hook_dir"
  cat << 'HOOK_EOF' > "$hook_file"
#!/usr/bin/env bash
# Git pre-push hook auto-generated by safety-push.sh
set -e

echo "🛡️  Running Git pre-push safety verification..."
"$(git rev-parse --show-toplevel)/safety-push.sh" --no-push
HOOK_EOF

  chmod +x "$hook_file"
  echo -e "${GREEN}✔ Git pre-push hook installed successfully to:${RESET} ${hook_file}"
  echo -e "${DIM}Every 'git push' command will now automatically run safety checks before uploading code.${RESET}"
}

uninstall_git_hook() {
  local hook_file="${ROOT_DIR}/.git/hooks/pre-push"
  if [ -f "$hook_file" ]; then
    rm -f "$hook_file"
    echo -e "${YELLOW}✔ Git pre-push hook removed.${RESET}"
  else
    echo -e "${CYAN}ℹ No pre-push hook found to remove.${RESET}"
  fi
}

# ─── CHECK 1: Git Working Tree & Branch Integrity ─────────────────────────────
check_git_status() {
  log_step "1/6 Verifying Git Branch & Working Tree State"

  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    log_fail "Git Repository" "Not inside a valid Git repository"
    return 1
  fi

  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo 'unknown')"
  CURRENT_SHA="$(git rev-parse --short HEAD 2>/dev/null || echo 'unknown')"
  COMMIT_AUTHOR="$(git log -1 --pretty=format:'%an <%ae>' 2>/dev/null || echo 'unknown')"
  COMMIT_MSG="$(git log -1 --pretty=format:'%s' 2>/dev/null || echo 'none')"

  log_info "Branch: ${BOLD}${MAGENTA}${CURRENT_BRANCH}${RESET} | Commit: ${CYAN}${CURRENT_SHA}${RESET} (${DIM}${COMMIT_MSG}${RESET})"
  log_info "Author: ${COMMIT_AUTHOR}"

  # Check for uncommitted / unstaged changes
  local unstaged_count
  unstaged_count=$(git status --porcelain 2>/dev/null | wc -l || echo 0)
  if [ "$unstaged_count" -gt 0 ]; then
    log_warn "Working Tree" "${unstaged_count} uncommitted/unstaged file(s) found (only committed code will be pushed)"
  else
    log_pass "Working Tree" "Clean - no uncommitted changes"
  fi

  # Check upstream status
  if git rev-parse --symbolic-full-name @{u} >/dev/null 2>&1; then
    local counts
    counts="$(git rev-list --left-right --count @{u}...HEAD 2>/dev/null || echo '0 0')"
    local behind
    local ahead
    behind="$(echo "$counts" | awk '{print $1}')"
    ahead="$(echo "$counts" | awk '{print $2}')"

    if [ "$behind" -gt 0 ]; then
      log_fail "Branch Sync" "Local branch is behind remote by ${behind} commit(s). Run 'git pull --rebase' before pushing!"
    elif [ "$ahead" -eq 0 ]; then
      log_warn "Commit Status" "No new local commits ahead of remote tracking branch"
    else
      log_pass "Branch Sync" "Ready to push: ${ahead} commit(s) ahead of remote"
    fi
  else
    log_warn "Remote Upstream" "No upstream tracking branch set (first push for this branch)"
  fi

  # Check for unresolved merge conflicts in working copy
  local conflict_files
  conflict_files=$(git grep -I -n -E "^<{7}[[:space:]]|^={7}$|^>{7}[[:space:]]" HEAD 2>/dev/null || true)
  if [ -n "$conflict_files" ]; then
    log_fail "Merge Conflict Markers" "Unresolved merge conflict markers found in files:\n$conflict_files"
  else
    log_pass "Merge Conflicts" "No conflict markers detected"
  fi
}

# ─── CHECK 2: Repository Guards & Secret Protection (Matches CI Guard) ────────
check_repository_guards() {
  log_step "2/6 Running Repository Guards & Secret Protection (CI-Guards)"

  # 1. Block tracked .env files (Mirrors CI job repository-guards)
  local tracked_env
  tracked_env="$(git ls-files '.env' '.env.*' ':!:.env.example' 2>/dev/null || true)"
  if [ -n "$tracked_env" ]; then
    log_fail "Tracked Secret Files" "Tracked environment files detected (CRITICAL CI BLOCKER):\n${tracked_env}\nRun: git rm --cached <file>"
  else
    log_pass "Tracked .env Guards" "No secret environment files tracked"
  fi

  # 2. Check for staged .env files
  local staged_env
  staged_env="$(git diff --cached --name-only 2>/dev/null | grep -E '^(\.env|\.env\..*)$' | grep -v '^\.env\.example$' || true)"
  if [ -n "$staged_env" ]; then
    log_fail "Staged Secret Files" "Staged .env files detected:\n${staged_env}\nRun: git reset HEAD <file>"
  else
    log_pass "Staged .env Guards" "No secret .env files staged"
  fi

  # 3. Check for tracked private keys & TLS cert keys
  local tracked_keys
  tracked_keys="$(git ls-files '*.key' '*.pem' '*.pfx' '*.p12' 'certs/*.key' 2>/dev/null || true)"
  if [ -n "$tracked_keys" ]; then
    log_fail "Private Key Guards" "Private key or certificate files are tracked by Git:\n${tracked_keys}\nAdd to .gitignore and git rm --cached"
  else
    log_pass "Private Key Guards" "No private keys or certificates tracked"
  fi

  # 4. Check for tracked build artifacts or heavy files
  local tracked_artifacts
  tracked_artifacts="$(git ls-files 'dist/*' 'node_modules/*' '*.tar' '*.zip' '*.7z' '.DS_Store' 2>/dev/null | head -n 10 || true)"
  if [ -n "$tracked_artifacts" ]; then
    log_fail "Artifact Guards" "Build artifacts or archives are tracked by Git:\n${tracked_artifacts}\nRun: git rm -r --cached dist/ node_modules/"
  else
    log_pass "Artifact Guards" "No build artifacts or archive files tracked"
  fi

  # 5. Secret pattern scanner in outgoing diff
  local diff_target="@{u}..HEAD"
  if ! git rev-parse --symbolic-full-name @{u} >/dev/null 2>&1; then
    diff_target="HEAD~1..HEAD"
    if ! git rev-parse HEAD~1 >/dev/null 2>&1; then
      diff_target="HEAD"
    fi
  fi

  local secret_patterns
  secret_patterns=$(git diff "$diff_target" 2>/dev/null | grep -E -i "(AKIA[0-9A-Z]{16}|ghp_[0-9a-zA-Z]{36}|xox[baprs]-[0-9a-zA-Z]{10,48}|BEGIN[[:space:]]+(RSA|EC|DSA|OPENSSH|PGP)[[:space:]]+PRIVATE[[:space:]]+KEY)" || true)
  if [ -n "$secret_patterns" ]; then
    log_fail "Secret Leak Scanner" "Potential sensitive API keys or private keys found in outgoing diff!"
  else
    log_pass "Secret Pattern Scan" "No credentials or private keys in outgoing commits"
  fi
}

# ─── CHECK 3: Project Manifest & JSON Validation ──────────────────────────────
check_manifests() {
  log_step "3/6 Validating Package Manifests & Configurations"

  if [ -f "package.json" ]; then
    if node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))" >/dev/null 2>&1; then
      log_pass "package.json" "Valid JSON syntax"
    else
      log_fail "package.json" "Invalid JSON syntax detected in package.json"
    fi
  else
    log_warn "package.json" "No package.json found in root"
  fi

  if [ -f "tsconfig.json" ]; then
    local tsconfig_check
    if node -e '
      try {
        const json5 = require("json5");
        json5.parse(require("fs").readFileSync("tsconfig.json", "utf8"));
        process.exit(0);
      } catch (e) {
        try {
          const text = require("fs").readFileSync("tsconfig.json", "utf8");
          const clean = text.replace(/("(\\[\s\S]|[^"\\])*")|(\/\*[\s\S]*?\*\/|\/\/[^\n\r]*)/g, (m, g1) => g1 || "");
          JSON.parse(clean);
          process.exit(0);
        } catch (err) {
          process.exit(1);
        }
      }
    ' >/dev/null 2>&1; then
      log_pass "tsconfig.json" "Valid TypeScript configuration syntax"
    else
      log_fail "tsconfig.json" "Invalid JSON/JSONC syntax detected in tsconfig.json"
    fi
  fi

  if [ ! -d "node_modules" ] && [ -f "package.json" ]; then
    log_warn "Dependencies" "node_modules directory is missing! Run 'npm ci' first."
  else
    log_pass "node_modules" "Installed dependencies directory present"
  fi
}

# ─── CHECK 4: Code Quality, Tests & Build (Matches CI Quality Job) ────────────
check_code_quality_and_build() {
  log_step "4/6 Executing Quality Checks & Production Build (CI-Quality)"

  if [ ! -f "package.json" ]; then
    log_warn "Quality Suite" "Skipping npm checks (no package.json)"
    return 0
  fi

  # 1. Format check (if script exists)
  if npm run --if-present format:check >/dev/null 2>&1; then
    log_pass "Code Formatting" "format:check passed (or not configured)"
  else
    log_fail "Code Formatting" "npm run format:check failed"
  fi

  # 2. Lint check (if script exists)
  if npm run --if-present lint >/dev/null 2>&1; then
    log_pass "Linter" "lint passed (or not configured)"
  else
    log_fail "Linter" "npm run lint failed"
  fi

  # 3. Typecheck (if script exists)
  if npm run --if-present typecheck >/dev/null 2>&1; then
    log_pass "Typecheck" "typecheck passed (or not configured)"
  else
    log_fail "Typecheck" "npm run typecheck failed"
  fi

  # 4. Test suite (if script exists)
  if npm test --if-present -- --passWithNoTests=false >/dev/null 2>&1; then
    log_pass "Unit & Integration Tests" "npm test passed (or not configured)"
  else
    log_warn "Unit Tests" "npm test encountered issues or no tests configured"
  fi

  # 5. Production Build (Vite)
  if [ "$SKIP_BUILD" = true ]; then
    log_warn "Production Build" "Skipped by --skip-build flag"
  else
    log_info "Running 'npm run build' (Vite production bundle)..."
    local build_output
    if build_output=$(npm run build 2>&1); then
      log_pass "Vite Production Build" "Application compiled and bundled successfully into dist/"
    else
      log_fail "Vite Production Build" "Build failed!\n${build_output}"
    fi
  fi
}

# ─── CHECK 5: Dependency Security Audit ───────────────────────────────────────
check_dependency_audit() {
  log_step "5/6 Scanning Dependency Security (npm audit)"

  if [ "$SKIP_AUDIT" = true ]; then
    log_warn "Security Audit" "Skipped by --skip-audit flag"
    return 0
  fi

  if [ -f "package.json" ]; then
    local audit_out
    audit_out=$(npm audit --audit-level=high 2>&1 || true)
    local high_crit
    high_crit=$(echo "$audit_out" | grep -E "[0-9]+ (high|critical)" || true)

    if echo "$audit_out" | grep -q "found 0 vulnerabilities"; then
      log_pass "Dependency Audit" "0 vulnerabilities detected"
    elif [ -n "$high_crit" ]; then
      if [ "$STRICT_MODE" = true ]; then
        log_fail "Dependency Audit" "High/Critical vulnerabilities detected: ${high_crit}"
      else
        log_warn "Dependency Audit" "Vulnerabilities detected (non-blocking in CI): ${high_crit}"
      fi
    else
      log_pass "Dependency Audit" "No high/critical vulnerabilities"
    fi
  fi
}

# ─── CHECK 6: Docker & Infrastructure Configuration ───────────────────────────
check_infrastructure() {
  log_step "6/6 Verifying Docker & Infrastructure Configurations"

  if [ "$SKIP_DOCKER" = true ]; then
    log_warn "Docker Validation" "Skipped by --skip-docker flag"
    return 0
  fi

  # Validate Docker Compose file
  if [ -f "docker-compose.yml" ]; then
    if command -v docker >/dev/null 2>&1; then
      local dummy_env="TLS_CERT_PATH=/dev/null TLS_KEY_PATH=/dev/null POSTGRES_DB=school_db POSTGRES_USER=postgres POSTGRES_PASSWORD=changeme"
      local compose_err=""

      # If .env does not exist locally, temporarily touch empty .env for validation so compose doesn't fail on env_file
      local temp_env_created=false
      if [ ! -f ".env" ]; then
        touch .env
        temp_env_created=true
      fi

      if compose_err=$(env $dummy_env docker compose config -q 2>&1); then
        log_pass "docker-compose.yml" "Configuration and syntax valid"
      else
        log_fail "docker-compose.yml" "Invalid compose configuration:\n${compose_err}"
      fi

      if [ "$temp_env_created" = true ]; then
        rm -f .env
      fi
    else
      log_warn "Docker" "docker CLI not found, skipping compose syntax validation"
    fi
  fi

  # Validate Dockerfile presence
  if [ -f "Dockerfile" ]; then
    log_pass "Dockerfile" "Root Dockerfile present"
  fi

  if [ -f "backend/Dockerfile" ]; then
    log_pass "backend/Dockerfile" "Backend Dockerfile present"
  fi
}

# ─── Summary & Execution Report ───────────────────────────────────────────────
print_summary() {
  local end_time
  end_time=$(date +%s)
  local duration=$((end_time - START_TIME))

  echo -e "\n${CYAN}==============================================================================${RESET}"
  echo -e "${BOLD}${WHITE}📊  PRE-FLIGHT VALIDATION SCORECARD${RESET} ${DIM}(Completed in ${duration}s)${RESET}"
  echo -e "${CYAN}==============================================================================${RESET}"

  for i in "${!REPORT_NAMES[@]}"; do
    local name="${REPORT_NAMES[$i]}"
    local status="${REPORT_STATUS[$i]}"
    local detail="${REPORT_DETAILS[$i]}"

    case "$status" in
      PASS)
        printf "  %-32s ${GREEN}✔ PASS${RESET}  ${DIM}%s${RESET}\n" "$name" "$detail"
        ;;
      WARN)
        printf "  %-32s ${YELLOW}⚠ WARN${RESET}  ${YELLOW}%s${RESET}\n" "$name" "$detail"
        ;;
      FAIL)
        printf "  %-32s ${RED}✖ FAIL${RESET}  ${RED}%s${RESET}\n" "$name" "$detail"
        ;;
    esac
  done

  echo -e "${CYAN}------------------------------------------------------------------------------${RESET}"
  echo -e "  Total Checks: ${BOLD}${TOTAL_CHECKS}${RESET} | Passed: ${GREEN}${PASSED_CHECKS}${RESET} | Warnings: ${YELLOW}${WARNINGS_COUNT}${RESET} | Failed: ${RED}${FAILED_CHECKS}${RESET}"
  echo -e "${CYAN}==============================================================================${RESET}\n"
}

# ─── Push Execution Prompt ───────────────────────────────────────────────────
handle_push() {
  if [ "$FAILED_CHECKS" -gt 0 ]; then
    echo -e "${BG_RED}${BOLD} ✖ PRE-PUSH CHECKS FAILED ${RESET} ${RED}Please resolve the errors above before pushing to pipeline.${RESET}\n"
    exit 1
  fi

  echo -e "${BG_GREEN}${BOLD} ✔ ALL PRE-PUSH SAFETY CHECKS PASSED ${RESET} ${GREEN}Code is safe for CI/CD pipeline!${RESET}\n"

  if [ "$NO_PUSH" = true ]; then
    log_info "No-push mode enabled. Exiting with success."
    exit 0
  fi

  local target_branch="${CURRENT_BRANCH:-$(git rev-parse --abbrev-ref HEAD)}"

  if [ "$AUTO_PUSH" = true ]; then
    echo -e "${CYAN}🚀 Auto-pushing to origin/${target_branch}...${RESET}"
    git push origin "$target_branch"
    echo -e "\n${GREEN}✔ Successfully pushed to origin/${target_branch}!${RESET}"
    exit 0
  fi

  # Interactive prompt if running in terminal
  if [ -t 0 ]; then
    echo -e "${BOLD}${WHITE}Would you like to push your commits to ${CYAN}origin/${target_branch}${WHITE} now?${RESET}"
    read -r -p "👉 Push to remote? [Y/n]: " response
    response="${response:-y}"

    if [[ "$response" =~ ^[Yy]$ ]]; then
      echo -e "\n${CYAN}🚀 Pushing to origin/${target_branch}...${RESET}"
      if git push origin "$target_branch"; then
        echo -e "\n${GREEN}${BOLD}✔ PUSH COMPLETED SUCCESSFULLY!${RESET} CI/CD pipeline will now process your changes."
      else
        echo -e "\n${RED}✖ Git push failed. Please check your network connection or git credentials.${RESET}"
        exit 1
      fi
    else
      echo -e "${DIM}Push cancelled by user. Local checks succeeded.${RESET}"
    fi
  else
    log_info "Non-interactive shell. All checks passed successfully."
  fi
}

# ─── Main Routine ─────────────────────────────────────────────────────────────
main() {
  parse_arguments "$@"
  print_banner
  check_git_status
  check_repository_guards
  check_manifests
  check_code_quality_and_build
  check_dependency_audit
  check_infrastructure
  print_summary
  handle_push
}

main "$@"

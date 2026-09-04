#!/usr/bin/env bash
# ==============================================================================
# 🚀 EC2 HOST PROVISIONING & INFRASTRUCTURE HARDENING SCRIPT
# Project: School Management System (Chea Chanto College)
# Target OS: Ubuntu 22.04 LTS (x86_64 / arm64)
# ==============================================================================
# This script configures a fresh EC2 instance with:
# 1. 2GB Swapfile (if RAM < 4GB) to prevent Docker build OOM kills
# 2. Docker Engine + Docker Compose Plugin (Official Docker APT repository)
# 3. UFW Firewall (Default deny incoming, allow 22/SSH, 80/HTTP, 443/HTTPS only)
# 4. Fail2ban (SSH brute-force protection: 5 retries = 1 hour ban)
# 5. Non-root user setup for Docker management
#
# Usage:
#   sudo ./scripts/ec2-setup.sh
#   newgrp docker
# ==============================================================================

set -euo pipefail

# ─── Colors and Formatting ───────────────────────────────────────────────────
if [ -t 1 ]; then
  BOLD="\033[1m"
  GREEN="\033[1;32m"
  YELLOW="\033[1;33m"
  BLUE="\033[1;34m"
  CYAN="\033[1;36m"
  RED="\033[1;31m"
  RESET="\033[0m"
else
  BOLD="" GREEN="" YELLOW="" BLUE="" CYAN="" RED="" RESET=""
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

# ─── Privilege Check ─────────────────────────────────────────────────────────
if [ "$EUID" -ne 0 ]; then
  log_fail "This provisioning script must be run as root: sudo $0"
fi

TARGET_USER="${SUDO_USER:-ubuntu}"
TOTAL_RAM_MB=$(free -m | awk '/^Mem:/{print $2}')

echo -e "${CYAN}==============================================================================${RESET}"
echo -e "${BOLD}🛡️  EC2 INFRASTRUCTURE HARDENING & PROVISIONING${RESET}"
echo -e "Target User: ${BOLD}${TARGET_USER}${RESET} | Total RAM: ${BOLD}${TOTAL_RAM_MB}MB${RESET}"
echo -e "${CYAN}==============================================================================${RESET}"

# ─── STEP 1: System Packages & Upgrades ──────────────────────────────────────
log_step "1/5 Updating system packages and installing foundational utilities"
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get upgrade -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold"
apt-get install -y --no-install-recommends \
  ca-certificates \
  curl \
  gnupg \
  lsb-release \
  ufw \
  fail2ban \
  htop \
  git \
  net-tools \
  iptables

log_pass "Foundational utilities installed"

# ─── STEP 2: Swapfile Provisioning (OOM Protection) ───────────────────────────
log_step "2/5 Checking and configuring Swapfile (OOM protection)"
CURRENT_SWAP_MB=$(free -m | awk '/^Swap:/{print $2}')

if [ "$CURRENT_SWAP_MB" -gt 0 ]; then
  log_info "Swap is already enabled (${CURRENT_SWAP_MB}MB). Skipping swap creation."
elif [ "$TOTAL_RAM_MB" -lt 4096 ]; then
  log_info "RAM is ${TOTAL_RAM_MB}MB (< 4096MB). Provisioning 2GB swapfile..."
  
  if [ -f /swapfile ]; then
    swapoff /swapfile 2>/dev/null || true
    rm -f /swapfile
  fi

  fallocate -l 2G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=2048 status=progress
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile

  # Persist across reboots
  if ! grep -q '/swapfile none swap' /etc/fstab; then
    echo "/swapfile none swap sw 0 0" >> /etc/fstab
  fi

  # Optimize swappiness for server workloads
  sysctl vm.swappiness=10
  echo "vm.swappiness=10" > /etc/sysctl.d/99-swap.conf
  log_pass "2GB swapfile configured and activated"
else
  log_info "System has ${TOTAL_RAM_MB}MB RAM (>= 4GB). Swapfile allocation skipped."
fi

# ─── STEP 3: Docker Engine & Compose Installation ─────────────────────────────
log_step "3/5 Installing Docker Engine and Docker Compose Plugin"
if ! command -v docker >/dev/null 2>&1; then
  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor --yes -o /etc/apt/keyrings/docker.gpg
  chmod a+r /etc/apt/keyrings/docker.gpg

  ARCH=$(dpkg --print-architecture)
  CODENAME=$(lsb_release -cs)

  echo \
    "deb [arch=${ARCH} signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu ${CODENAME} stable" | \
    tee /etc/apt/sources.list.d/docker.list > /dev/null

  apt-get update -y
  apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

  systemctl enable --now docker
  log_pass "Docker Engine installed successfully: $(docker --version)"
else
  log_info "Docker is already installed: $(docker --version)"
fi

# Ensure compose plugin is installed
if ! docker compose version >/dev/null 2>&1; then
  apt-get install -y docker-compose-plugin
fi
log_pass "Docker Compose plugin verified: $(docker compose version)"

# Add target user to docker group
if id "$TARGET_USER" >/dev/null 2>&1; then
  groupadd -f docker
  usermod -aG docker "$TARGET_USER"
  log_pass "User '${TARGET_USER}' added to 'docker' group"
fi

# ─── STEP 4: UFW Firewall Hardening ───────────────────────────────────────────
log_step "4/5 Configuring UFW Firewall (SSH, HTTP, HTTPS only)"
# Reset or configure strict rules
ufw default deny incoming
ufw default allow outgoing

# Allow only standard essential traffic
ufw allow 22/tcp comment 'SSH'
ufw allow 80/tcp comment 'HTTP Web'
ufw allow 443/tcp comment 'HTTPS Web'

# Enable firewall idempotently without prompting
echo "y" | ufw enable
ufw reload

log_pass "UFW Firewall active: Ports 22, 80, 443 allowed; default incoming blocked"

# ─── STEP 5: Fail2ban Intrusion Prevention ────────────────────────────────────
log_step "5/5 Configuring Fail2ban SSH brute-force defense"
cat <<'EOF' > /etc/fail2ban/jail.local
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5
banaction = ufw

[sshd]
enabled  = true
port     = 22
mode     = normal
backend  = systemd
EOF

systemctl enable fail2ban
systemctl restart fail2ban

log_pass "Fail2ban enabled (5 retries within 10m -> 1 hour IP ban via UFW)"

# ─── Final Validation & Summary ───────────────────────────────────────────────
echo -e "\n${CYAN}==============================================================================${RESET}"
echo -e "${BOLD}${GREEN}✅ EC2 HOST PROVISIONING COMPLETED SUCCESSFULLY${RESET}"
echo -e "${CYAN}==============================================================================${RESET}"
echo -e "• Docker:    ${GREEN}$(docker --version)${RESET}"
echo -e "• Compose:   ${GREEN}$(docker compose version)${RESET}"
echo -e "• Firewall:  ${GREEN}$(ufw status | head -n 3 | tr '\n' ' ')${RESET}"
echo -e "• Fail2ban:  ${GREEN}$(systemctl is-active fail2ban)${RESET}"
echo -e "• Swap:      ${GREEN}$(free -h | awk '/^Swap:/{print $2}')${RESET}"
echo -e "\n${BOLD}Next steps for user '${TARGET_USER}':${RESET}"
echo -e "1. Run ${CYAN}newgrp docker${RESET} (or log out and back in) to apply group permissions."
echo -e "2. Copy production environment file: ${CYAN}cp .env.example .env && chmod 600 .env${RESET}"
echo -e "3. Execute deployment: ${CYAN}./scripts/deploy.sh${RESET}\n"


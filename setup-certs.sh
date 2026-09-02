#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

mkdir -p certs

if [ ! -f certs/dev-key.pem ]; then
  echo "Generating private key..."
  openssl genrsa -out certs/dev-key.pem 2048
fi

if [ ! -f certs/dev-cert.pem ]; then
  echo "Generating certificate..."
  openssl req -new -x509 -key certs/dev-key.pem -out certs/dev-cert.pem -days 365 -subj "/CN=cheachantocollege.edu.kh"
fi

if [ ! -f .env ]; then
  echo "Creating .env file..."
  echo "TLS_CERT_PATH=./certs/dev-cert.pem" > .env
  echo "TLS_KEY_PATH=./certs/dev-key.pem" >> .env
else
  grep -q "TLS_CERT_PATH" .env || echo "TLS_CERT_PATH=./certs/dev-cert.pem" >> .env
  grep -q "TLS_KEY_PATH" .env || echo "TLS_KEY_PATH=./certs/dev-key.pem" >> .env
fi

echo "✅ Certificates and .env configured successfully in $SCRIPT_DIR"

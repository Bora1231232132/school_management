# ─── dev.ps1 ──────────────────────────────────────────────────────────
# Rebuilds the Docker image locally and restarts the local container.
# Use this after making code changes to sync your local Docker.
# Usage: ./dev.ps1
# ──────────────────────────────────────────────────────────────────────

Write-Host "🔨 Rebuilding Docker image from local code..." -ForegroundColor Cyan
docker compose build
if ($LASTEXITCODE -ne 0) { Write-Host "❌ Build failed!" -ForegroundColor Red; exit 1 }

Write-Host "♻️  Restarting local container..." -ForegroundColor Cyan
docker compose up -d --force-recreate school-web
if ($LASTEXITCODE -ne 0) { Write-Host "❌ Failed to restart container!" -ForegroundColor Red; exit 1 }

Write-Host "✅ Local Docker is synced! Visit http://localhost to see your changes." -ForegroundColor Green

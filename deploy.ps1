# ─── deploy.ps1 ──────────────────────────────────────────────────────
# Builds the frontend Docker image locally and deploys it to the server
# Usage: ./deploy.ps1
# ─────────────────────────────────────────────────────────────────────

$SERVER = "dev@70.70.70.100"
$REMOTE_DIR = "~/school_management"
$IMAGE_NAME = "school-web:latest"    # must match `image:` in docker-compose.yml
$TAR_FILE = "school_web.tar"

Write-Host "🔨 Building Docker image..." -ForegroundColor Cyan
docker compose build
if ($LASTEXITCODE -ne 0) { Write-Host "❌ Build failed!" -ForegroundColor Red; exit 1 }

Write-Host "📦 Saving image to $TAR_FILE..." -ForegroundColor Cyan
docker save $IMAGE_NAME -o $TAR_FILE
if ($LASTEXITCODE -ne 0) { Write-Host "❌ Save failed!" -ForegroundColor Red; exit 1 }

Write-Host "� Copying config files to server..." -ForegroundColor Cyan
scp docker-compose.yml "${SERVER}:${REMOTE_DIR}/"
scp .env "${SERVER}:${REMOTE_DIR}/"
if ($LASTEXITCODE -ne 0) { Write-Host "❌ Config copy failed!" -ForegroundColor Red; exit 1 }

Write-Host "�🚀 Uploading image to server ($SERVER)..." -ForegroundColor Cyan
scp $TAR_FILE "${SERVER}:~/"
if ($LASTEXITCODE -ne 0) { Write-Host "❌ Upload failed!" -ForegroundColor Red; exit 1 }

Write-Host "♻️  Loading image and restarting container on server..." -ForegroundColor Cyan
ssh $SERVER "docker load -i ~/$TAR_FILE && cd $REMOTE_DIR && docker compose up -d --force-recreate school-web && rm ~/$TAR_FILE"
if ($LASTEXITCODE -ne 0) { Write-Host "❌ Remote deploy failed!" -ForegroundColor Red; exit 1 }

Write-Host "🧹 Cleaning up local tar file..." -ForegroundColor Cyan
Remove-Item $TAR_FILE

Write-Host "✅ Deployment complete! Site is updated on the server." -ForegroundColor Green

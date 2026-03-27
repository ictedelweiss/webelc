#!/bin/bash
# DEPLOY_CURL_API.sh - Deploy menggunakan Cloudflare API langsung

set -e

ACCOUNT_ID="d8416a427e68e27b0c75e37a202fe17a"
PROJECT_NAME="elc-website-blv"
BUILD_DIR="./out"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  🚀 CLOUDFLARE PAGES DEPLOYMENT - CURL API                 ║"
echo "║  Project: elc-website-blv.pages.dev                        ║"
echo "║  Account ID: $ACCOUNT_ID                    ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check build directory
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Build directory '$BUILD_DIR' tidak ditemukan!"
    echo ""
    echo "Silakan jalankan: npm run build"
    exit 1
fi

echo "✅ Build directory ditemukan: $BUILD_DIR"
echo ""

# Get OAuth token from wrangler config
echo "📋 Mengecek autentikasi Cloudflare..."

# Try to get token from wrangler
if ! OAUTH_TOKEN=$(wrangler whoami 2>/dev/null | grep -oP '(?<=OAuth Token).*' | head -1); then
    echo "❌ Tidak bisa mendapatkan OAuth token!"
    echo ""
    echo "Silakan jalankan: wrangler login"
    exit 1
fi

# Get the actual token from wrangler config file
TOKEN_FILE=$(find ~/.config -name ".toml" 2>/dev/null | grep wrangler | head -1)

if [ -z "$TOKEN_FILE" ]; then
    # Try alternative location
    TOKEN_FILE="$HOME/.config/.wrangler/config.toml"
fi

if [ ! -f "$TOKEN_FILE" ]; then
    echo "❌ Token file tidak ditemukan di: $TOKEN_FILE"
    echo ""
    echo "Silakan ensure Anda sudah login dengan: wrangler login"
    exit 1
fi

# Extract token from config
BEARER_TOKEN=$(grep -oP 'oauth_token = "\K[^"]+' "$TOKEN_FILE" | head -1)

if [ -z "$BEARER_TOKEN" ]; then
    echo "❌ Tidak bisa mengekstrak OAuth token dari config!"
    echo ""
    echo "Token file: $TOKEN_FILE"
    exit 1
fi

echo "✅ OAuth token ditemukan!"
echo ""

# Create temporary zip file with all static files
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦 Preparing files for upload..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Count files
FILE_COUNT=$(find "$BUILD_DIR" -type f | wc -l)
echo "📁 Total files: $FILE_COUNT"

cd "$BUILD_DIR" || exit 1

# Create deployment manifest
echo "Creating deployment..."
echo ""

# Deploy using Cloudflare API
echo "🚀 Uploading to Cloudflare Pages..."
echo ""

# Use wrangler pages deploy with retry
MAX_RETRIES=3
RETRY=0

while [ $RETRY -lt $MAX_RETRIES ]; do
    if wrangler pages deploy . \
        --project-name="$PROJECT_NAME" \
        --account-id="$ACCOUNT_ID" 2>&1; then
        
        echo ""
        echo "╔════════════════════════════════════════════════════════════╗"
        echo "║                   ✅ DEPLOYMENT BERHASIL!                   ║"
        echo "╚════════════════════════════════════════════════════════════╝"
        echo ""
        echo "🌐 Website URL:"
        echo "   https://elc-website-blv.pages.dev"
        echo ""
        echo "📝 Langkah berikutnya:"
        echo "   1. Buka URL di atas untuk verifikasi"
        echo "   2. Setup custom domain di Cloudflare dashboard (opsional)"
        echo "   3. Connect GitHub untuk auto-deploy (opsional)"
        echo ""
        echo "💡 Tips:"
        echo "   - Setiap deploy baru akan update otomatis"
        echo "   - Jika ada error, check Cloudflare dashboard"
        echo "   - Untuk git auto-deploy, connect GitHub ke Pages"
        echo ""
        exit 0
    else
        RETRY=$((RETRY + 1))
        if [ $RETRY -lt $MAX_RETRIES ]; then
            echo ""
            echo "⏳ Mencoba lagi... (attempt $((RETRY + 1))/$MAX_RETRIES)"
            sleep 5
        fi
    fi
done

echo ""
echo "❌ Deployment gagal setelah $MAX_RETRIES percobaan!"
echo ""
echo "Kemungkinan masalah:"
echo "  - Token tidak valid"
echo "  - Tidak punya akses Cloudflare"
echo "  - Rate limit tercapai"
echo ""
echo "Silakan:"
echo "  1. Check https://dash.cloudflare.com/pages"
echo "  2. Verifikasi project name: $PROJECT_NAME"
echo "  3. Coba lagi dalam beberapa menit"
echo ""
exit 1

#!/bin/bash
# DEPLOY_INTERACTIVE.sh - Interactive deployment script

set -e

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  🚀 CLOUDFLARE PAGES DEPLOYMENT - WRANGLER CLI             ║"
echo "║  Project: elc-website-blv.pages.dev                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if Wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI tidak terinstall!"
    echo ""
    echo "Install dengan:"
    echo "  sudo npm install -g wrangler@latest"
    echo ""
    exit 1
fi

echo "✅ Wrangler CLI: $(wrangler --version)"
echo ""

# Check if API Token is set
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "📋 CLOUDFLARE_API_TOKEN tidak ditemukan"
    echo ""
    echo "Anda perlu API Token untuk deploy. Silakan:"
    echo ""
    echo "1️⃣  Buka: https://dash.cloudflare.com/profile/api-tokens"
    echo "2️⃣  Klik: Create Token"
    echo "3️⃣  Pilih: Edit Cloudflare Workers"
    echo "4️⃣  Copy token yang dihasilkan"
    echo ""
    read -p "Paste API Token Anda (atau tekan Ctrl+C untuk batal): " API_TOKEN
    
    if [ -z "$API_TOKEN" ]; then
        echo "❌ Token kosong. Dibatalkan."
        exit 1
    fi
    
    export CLOUDFLARE_API_TOKEN="$API_TOKEN"
fi

echo "✅ API Token ditemukan!"
echo ""

# Navigate to project
cd /var/www/html/elc-baru || exit 1

# Build
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦 Building Next.js project..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if ! npm run build 2>&1 | tail -10; then
    echo ""
    echo "❌ Build gagal!"
    exit 1
fi

if [ ! -d ".next" ]; then
    echo "❌ Folder .next tidak ditemukan!"
    exit 1
fi

echo ""
echo "✅ Build berhasil!"
echo ""

# Deploy
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Deploying ke Cloudflare Pages..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if wrangler pages deploy .next/static --project-name=elc-website-blv; then
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
    echo "╔════════════════════════════════════════════════════════════╗"
    echo ""
else
    echo ""
    echo "❌ Deployment gagal!"
    echo ""
    echo "Kemungkinan masalah:"
    echo "  - API Token tidak valid"
    echo "  - Tidak punya akses Cloudflare"
    echo "  - Rate limit tercapai"
    echo ""
    echo "Check logs atau coba lagi dalam beberapa menit"
    exit 1
fi

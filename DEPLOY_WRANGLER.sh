#!/bin/bash
# DEPLOY_WRANGLER.sh - Deploy ke Cloudflare Pages dengan Wrangler CLI

echo "=========================================="
echo "🚀 DEPLOY KE CLOUDFLARE PAGES"
echo "Project: elc-website-blv"
echo "=========================================="
echo ""

# Check if CLOUDFLARE_API_TOKEN is set
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "❌ CLOUDFLARE_API_TOKEN tidak ditemukan!"
    echo ""
    echo "Langkah 1: Buat API Token di Cloudflare"
    echo "============================================"
    echo "1. Buka: https://dash.cloudflare.com/profile/api-tokens"
    echo "2. Klik 'Create Token'"
    echo "3. Pilih template 'Edit Cloudflare Workers'"
    echo "4. Copy token yang dihasilkan"
    echo ""
    echo "Langkah 2: Set environment variable"
    echo "============================================"
    echo "export CLOUDFLARE_API_TOKEN='your-token-here'"
    echo ""
    echo "Langkah 3: Deploy"
    echo "============================================"
    echo "bash DEPLOY_WRANGLER.sh"
    echo ""
    exit 1
fi

echo "✅ API Token ditemukan!"
echo ""

cd /var/www/html/elc-baru

# Build project
echo "📦 Building project..."
npm run build 2>&1 | tail -5

if [ ! -d ".next" ]; then
    echo "❌ Build gagal!"
    exit 1
fi

echo "✅ Build berhasil!"
echo ""

# Deploy dengan Wrangler Pages
echo "🚀 Deploying ke Cloudflare Pages..."
echo "Project: elc-website-blv"
echo ""

wrangler pages deploy .next/static --project-name=elc-website-blv

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "✅ DEPLOYMENT BERHASIL!"
    echo "=========================================="
    echo "🌐 URL: https://elc-website-blv.pages.dev"
    echo ""
    echo "📝 Tips:"
    echo "- Buka URL di atas untuk melihat hasil"
    echo "- Custom domain bisa diatur di Cloudflare dashboard"
    echo "- Setiap git push otomatis deploy jika connected ke GitHub"
    echo "=========================================="
else
    echo ""
    echo "❌ Deployment gagal!"
    echo "Check error message di atas"
    exit 1
fi

#!/bin/bash

# DEPLOY_CLOUDFLARE_DIRECT.sh
# Deploy Edelweiss Learning Center langsung ke Cloudflare Pages tanpa GitHub

set -e

echo "=============================================="
echo "🚀 Cloudflare Pages Direct Deployment"
echo "=============================================="
echo ""
echo "Project: Edelweiss Learning Center (elc-baru)"
echo "Target: elc-website-blv.pages.dev"
echo ""

# Step 1: Build project
echo "📦 Step 1: Building project..."
echo ""

if [ ! -f "package.json" ]; then
  echo "❌ Error: package.json tidak ditemukan!"
  echo "Pastikan Anda berada di directory project root"
  exit 1
fi

npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build berhasil!"
else
  echo "❌ Build gagal. Mohon fix error di atas."
  exit 1
fi

echo ""
echo "=============================================="
echo "🔑 Step 2: Autentikasi Cloudflare"
echo "=============================================="
echo ""
echo "Anda perlu login ke Cloudflare untuk melanjutkan."
echo "Klik 'Allow' di browser window yang akan terbuka."
echo ""

# Step 2: Authenticate with Cloudflare
npx wrangler pages login

echo ""
echo "✅ Autentikasi berhasil!"
echo ""

# Step 3: Deploy
echo "=============================================="
echo "📤 Step 3: Deploying ke Cloudflare..."
echo "=============================================="
echo ""

npx wrangler pages deploy .next \
  --project-name=elc-website-blv \
  --branch=main

echo ""
echo "=============================================="
echo "✨ Deployment Complete!"
echo "=============================================="
echo ""
echo "🔗 Website URL: https://elc-website-blv.pages.dev"
echo ""
echo "✅ Tips Selanjutnya:"
echo "  1. Buka https://elc-website-blv.pages.dev"
echo "  2. Verify website sudah live dan berfungsi"
echo "  3. Setup custom domain (jika ada) di Cloudflare dashboard"
echo ""

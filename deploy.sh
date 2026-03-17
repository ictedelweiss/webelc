#!/bin/bash

# DEPLOY.sh - Simple deployment script
# Deploy ke Cloudflare Pages

set -e

echo "🚀 Deploying Edelweiss Learning Center to Cloudflare Pages"
echo ""

# Check if .next exists
if [ ! -d ".next" ]; then
  echo "Building project first..."
  npm run build
fi

echo "📤 Deploying to Cloudflare Pages..."
echo "Project: elc-website-blv"
echo ""

npx wrangler pages deploy .next \
  --project-name=elc-website-blv \
  --branch=main

echo ""
echo "✅ Deployment successful!"
echo "🔗 Website: https://elc-website-blv.pages.dev"

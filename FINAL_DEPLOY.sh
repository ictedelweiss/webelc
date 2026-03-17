#!/bin/bash
# FINAL_DEPLOY.sh - Deploy final ke Cloudflare Pages

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  🚀 CLOUDFLARE PAGES - WRANGLER CLI DEPLOYMENT              ║"
echo "║  Project: elc-website-blv                                  ║"
echo "║  Date: March 17, 2026                                      ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Step 1: Verify Wrangler
echo "Step 1: Verifying Wrangler CLI..."
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler tidak terinstall. Install dengan:"
    echo "   sudo npm install -g wrangler@latest"
    exit 1
fi
echo "✅ Wrangler $(wrangler --version | grep -oP 'wrangler \K[0-9.]+')"
echo ""

# Step 2: Build
cd /var/www/html/elc-baru
echo "Step 2: Building Next.js project..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi
echo ""

# Step 3: Check .next folder
echo "Step 3: Checking build output..."
if [ -d ".next" ]; then
    NEXT_SIZE=$(du -sh .next 2>/dev/null | cut -f1)
    echo "✅ Build folder found: .next ($NEXT_SIZE)"
else
    echo "❌ Build folder not found"
    exit 1
fi
echo ""

# Step 4: Check API Token
echo "Step 4: Checking Cloudflare API Token..."
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "❌ CLOUDFLARE_API_TOKEN not set!"
    echo ""
    echo "Setup instructions:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. Get API Token:"
    echo "   https://dash.cloudflare.com/profile/api-tokens"
    echo ""
    echo "2. Set environment variable:"
    echo "   export CLOUDFLARE_API_TOKEN='your-token-here'"
    echo ""
    echo "3. Run this script again:"
    echo "   bash FINAL_DEPLOY.sh"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    exit 1
fi
echo "✅ API Token detected"
echo ""

# Step 5: Deploy
echo "Step 5: Deploying to Cloudflare Pages..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if wrangler pages deploy .next/static --project-name=elc-website-blv; then
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║                   ✅ DEPLOYMENT SUCCESSFUL!                 ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📍 Website is now live at:"
    echo "   🌐 https://elc-website-blv.pages.dev"
    echo ""
    echo "🎉 What's next?"
    echo "   ✓ Visit the URL above to see your website"
    echo "   ✓ Setup custom domain (optional)"
    echo "   ✓ Connect GitHub for auto-deployment (optional)"
    echo ""
    echo "📚 Documentation:"
    echo "   - WRANGLER_DEPLOY_QUICK_START.md"
    echo "   - COMPLETE_DEPLOYMENT_GUIDE.md"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    exit 0
else
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║                  ❌ DEPLOYMENT FAILED                       ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo ""
    echo "⚠️  Possible issues:"
    echo "   - API Token is invalid or expired"
    echo "   - No permission to create Pages project"
    echo "   - Network connectivity issue"
    echo ""
    echo "🔧 Troubleshooting:"
    echo "   1. Verify API Token at: https://dash.cloudflare.com/"
    echo "   2. Create new token if expired"
    echo "   3. Try again in a few moments"
    echo ""
    exit 1
fi

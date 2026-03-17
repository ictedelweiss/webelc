#!/bin/bash
# PUSH_TO_GITHUB.sh - Script untuk push ke GitHub dan setup Cloudflare

set -e

echo "=========================================="
echo "Edelweiss Learning Center - GitHub Push & Cloudflare Setup"
echo "=========================================="
echo ""

# Step 1: Verify git status
echo "📋 Checking git status..."
cd /var/www/html/elc-baru
git status

echo ""
echo "=========================================="
echo "📍 STEP 1: Add GitHub Remote"
echo "=========================================="
echo ""
echo "Anda perlu memberikan informasi GitHub:"
echo ""
read -p "GitHub Username (contoh: anda): " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
  echo "❌ Username tidak boleh kosong!"
  exit 1
fi

REPO_URL="https://github.com/${GITHUB_USERNAME}/elc-baru.git"

echo ""
echo "Repository URL: $REPO_URL"
echo ""

# Check if origin already exists
if git remote | grep -q origin; then
  echo "⚠️  Remote 'origin' sudah ada. Menghapus dan menambahkan yang baru..."
  git remote remove origin
fi

git remote add origin "$REPO_URL"

echo "✅ Remote origin ditambahkan!"
echo ""

# Step 2: Verify branch
echo "=========================================="
echo "📍 STEP 2: Verifikasi Branch"
echo "=========================================="
echo ""

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Changing branch to main..."
  git branch -M main
  echo "✅ Branch changed to main"
fi

echo ""

# Step 3: Push to GitHub
echo "=========================================="
echo "📍 STEP 3: Push ke GitHub"
echo "=========================================="
echo ""
echo "Akan push branch 'main' ke $REPO_URL"
echo ""

read -p "Lanjutkan? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Pushing to GitHub..."
  git push -u origin main
  echo "✅ Push ke GitHub berhasil!"
else
  echo "❌ Push dibatalkan."
  exit 1
fi

echo ""
echo "=========================================="
echo "✨ Langkah Berikutnya:"
echo "=========================================="
echo ""
echo "1. GitHub Repository:"
echo "   🔗 https://github.com/${GITHUB_USERNAME}/elc-baru"
echo ""
echo "2. Setup Cloudflare Pages:"
echo "   🔗 https://dash.cloudflare.com/"
echo "   - Buka Pages"
echo "   - Create Project > Connect to Git"
echo "   - Pilih repository 'elc-baru'"
echo "   - Pilih branch 'main'"
echo "   - Framework: Next.js"
echo "   - Build command: npm run build"
echo "   - Build output: .next"
echo "   - Deploy!"
echo ""
echo "3. Docs Reference:"
echo "   📄 GITHUB_DEPLOYMENT_GUIDE.md"
echo ""
echo "=========================================="
echo "✅ Setup Selesai!"
echo "=========================================="

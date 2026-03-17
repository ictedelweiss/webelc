#!/bin/bash

# Deploy to Cloudflare Pages Script
# Project: elc-website-blv.pages.dev
# Created: March 17, 2026

set -e

echo "=========================================="
echo "🚀 Cloudflare Pages Direct Deploy"
echo "Project: elc-website-blv"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Verify we're in the right directory
if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ Error: package.json not found!${NC}"
  echo "Please run this script from project root"
  exit 1
fi

echo -e "${BLUE}📍 Step 1: Project Verification${NC}"
echo "Current directory: $(pwd)"
echo "Project: $(grep -o '"name": "[^"]*' package.json | cut -d'"' -f4)"
echo ""

# Step 2: Check dependencies
echo -e "${BLUE}📍 Step 2: Installing Dependencies${NC}"
if [ ! -d "node_modules" ]; then
  echo "Installing npm packages..."
  npm install
else
  echo "✓ Dependencies already installed"
fi
echo ""

# Step 3: Build project
echo -e "${BLUE}📍 Step 3: Building Next.js Project${NC}"
echo "Running: npm run build"
npm run build

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Build successful!${NC}"
else
  echo -e "${RED}❌ Build failed!${NC}"
  exit 1
fi
echo ""

# Step 4: Display next steps
echo -e "${YELLOW}=========================================="
echo "📋 NEXT STEPS FOR DEPLOYMENT"
echo "==========================================${NC}"
echo ""
echo -e "${GREEN}✓ Build completed successfully!${NC}"
echo ""
echo "To deploy to Cloudflare Pages (elc-website-blv):"
echo ""
echo "Option 1: Via GitHub (Recommended)"
echo "─────────────────────────────────"
echo "1. Create repository on GitHub:"
echo "   https://github.com/new"
echo ""
echo "2. Push code to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/elc-baru.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Connect to Cloudflare Pages:"
echo "   • Go to https://dash.cloudflare.com/"
echo "   • Click Pages"
echo "   • Create project > Connect to Git"
echo "   • Select repository"
echo "   • Build settings:"
echo "     - Framework: Next.js"
echo "     - Build command: npm run build"
echo "     - Build output: .next"
echo "   • Deploy!"
echo ""
echo "Option 2: Via Direct Upload (if you have Wrangler CLI)"
echo "─────────────────────────────────────────────────────"
echo "npm install -g wrangler"
echo "wrangler login"
echo "wrangler pages deploy .next --project-name=elc-website-blv"
echo ""
echo -e "${YELLOW}=========================================="
echo "Project will be available at:"
echo "🌐 https://elc-website-blv.pages.dev"
echo "==========================================${NC}"
echo ""

read -p "Would you like to setup GitHub and push now? (y/n): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo ""
  echo -e "${BLUE}📍 Setting up GitHub...${NC}"
  read -p "Enter your GitHub username: " GITHUB_USER
  
  if [ -z "$GITHUB_USER" ]; then
    echo -e "${RED}❌ GitHub username cannot be empty${NC}"
    exit 1
  fi
  
  REPO_URL="https://github.com/${GITHUB_USER}/elc-baru.git"
  
  # Check if origin exists
  if git remote | grep -q origin; then
    echo "Removing existing origin..."
    git remote remove origin
  fi
  
  echo "Adding GitHub remote..."
  git remote add origin "$REPO_URL"
  
  echo "Verifying branch..."
  git branch -M main
  
  echo ""
  echo "Ready to push to: $REPO_URL"
  read -p "Continue with push? (y/n): " -n 1 -r
  echo ""
  
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Pushing to GitHub..."
    git push -u origin main
    
    echo ""
    echo -e "${GREEN}✓ Pushed to GitHub successfully!${NC}"
    echo ""
    echo "Next: Connect to Cloudflare Pages"
    echo "1. Go to: https://dash.cloudflare.com/"
    echo "2. Create Pages project from GitHub"
    echo "3. Select: $GITHUB_USER/elc-baru"
    echo "4. Deploy!"
  fi
fi

echo ""
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo ""

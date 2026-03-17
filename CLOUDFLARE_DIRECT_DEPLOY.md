# 🚀 Direct Cloudflare Pages Deployment Guide

## Persiapan (Hanya 1x)

### Step 1: Setup Cloudflare Account

1. **Buat/Login ke Cloudflare**
   - URL: https://dash.cloudflare.com/
   - Buat akun gratis atau login

2. **Verifikasi Email**
   - Check email dan klik verification link

3. **Persiapan Selesai**
   - Tidak perlu setup domain
   - Cloudflare akan otomatis memberikan URL `.pages.dev`

---

## Deploy Langsung ke Cloudflare (First Time)

### Metode 1: Menggunakan Script (Recommended)

```bash
cd /var/www/html/elc-baru

# Make script executable
chmod +x DEPLOY_CLOUDFLARE_DIRECT.sh

# Run deployment script
bash DEPLOY_CLOUDFLARE_DIRECT.sh
```

**Apa yang akan terjadi:**
1. ✅ Build project locally
2. ✅ Open browser untuk Cloudflare login
3. ✅ Deploy ke `elc-website-blv.pages.dev`
4. ✅ Selesai! Website sudah live

---

### Metode 2: Manual Step-by-Step

#### Step 2.1: Build Project

```bash
cd /var/www/html/elc-baru
npm run build
```

**Expected output:**
```
✓ Compiled successfully
✓ Generating static pages
```

#### Step 2.2: Login ke Cloudflare

```bash
npx wrangler pages login
```

**Apa yang akan terjadi:**
- Browser window akan terbuka
- Login dengan Cloudflare account Anda
- Authorize Wrangler untuk deploy
- Browser akan close dan CLI akan continue

#### Step 2.3: Deploy ke Cloudflare Pages

```bash
npx wrangler pages deploy .next \
  --project-name=elc-website-blv \
  --branch=main
```

**Expected output:**
```
✓ Uploading files
✓ Creating deployment
✓ Deployment ID: xxxxx
✓ Deployment URL: https://xxxxx.elc-website-blv.pages.dev
```

**Final URL:**
```
https://elc-website-blv.pages.dev
```

---

## ✅ Verifikasi Deployment

Setelah deploy selesai:

1. **Akses Website**
   ```bash
   curl https://elc-website-blv.pages.dev
   # Expected: 200 OK
   ```

2. **Buka di Browser**
   - Homepage: https://elc-website-blv.pages.dev/
   - Playteracy: https://elc-website-blv.pages.dev/program/playteracy
   - IPDC: https://elc-website-blv.pages.dev/program/ipdc
   - Kurikulum: https://elc-website-blv.pages.dev/kurikulum
   - Artikel: https://elc-website-blv.pages.dev/artikel

3. **Check Performance**
   ```bash
   curl -I https://elc-website-blv.pages.dev
   # Lihat response time dan status
   ```

---

## 🔄 Deploy Ulang (Update Website)

Setelah update kode, untuk deploy ulang:

```bash
cd /var/www/html/elc-baru

# 1. Build
npm run build

# 2. Deploy (tidak perlu login lagi)
npx wrangler pages deploy .next \
  --project-name=elc-website-blv \
  --branch=main
```

---

## 📋 Build Configuration

File: `next.config.ts`

```typescript
const config: NextConfig = {
  output: 'export',  // Important for static export
  // ... other config
};
```

---

## 🔗 Custom Domain (Optional)

Jika ingin menggunakan domain custom seperti `elc.edelweisslearning.id`:

1. **Di Cloudflare Pages**
   - Dashboard > Pages > elc-website-blv
   - Settings > Custom Domain
   - Add domain

2. **Update DNS**
   - Add CNAME record (instruksi akan diberikan Cloudflare)
   - Tunggu propagation (5-48 jam)

---

## 🐛 Troubleshooting

### Error: "Authentication required"

```bash
# Re-authenticate
npx wrangler pages logout
npx wrangler pages login
```

### Error: "Project not found"

```bash
# Verify project exists di Cloudflare dashboard
# Atau create new project dengan different name
npx wrangler pages deploy .next --project-name=new-project-name
```

### Error: ".next directory not found"

```bash
# Ensure build completed successfully
npm run build
# Check if .next folder exists
ls -la .next
```

### Deployment stuck/timeout

```bash
# Try again with retry
npx wrangler pages deploy .next \
  --project-name=elc-website-blv \
  --branch=main \
  --skip-caching
```

---

## 📊 Monitoring Deployment

### Check Deployment Status

1. **Via Wrangler CLI**
   ```bash
   npx wrangler pages deployments list --project-name=elc-website-blv
   ```

2. **Via Cloudflare Dashboard**
   - URL: https://dash.cloudflare.com/
   - Go to Pages > elc-website-blv
   - Tab: Deployments
   - See all deployments dan status

### View Deployment Logs

```bash
npx wrangler pages deployments rollback \
  --project-name=elc-website-blv
```

---

## ⚡ Performance Tips

1. **Image Optimization**
   - Cloudflare otomatis optimize images
   - Tidak perlu khawatir

2. **Caching**
   - Static assets di-cache globally
   - Pages rebuild saat deploy baru

3. **CDN**
   - Automatic CDN di 200+ cities worldwide
   - Fast loading dari anywhere

---

## 📚 Additional Resources

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Wrangler CLI Docs**: https://developers.cloudflare.com/workers/wrangler/
- **Next.js Static Export**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

## 🎯 Quick Commands Reference

```bash
# Build locally
npm run build

# Login (first time only)
npx wrangler pages login

# Deploy
npx wrangler pages deploy .next --project-name=elc-website-blv

# Check deployments
npx wrangler pages deployments list --project-name=elc-website-blv

# Logout
npx wrangler pages logout
```

---

**Project**: Edelweiss Learning Center  
**Deployment Target**: elc-website-blv.pages.dev  
**Date**: March 17, 2026  
**Status**: Ready to Deploy

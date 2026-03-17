# 🚀 DEPLOYMENT READY - WRANGLER CLI

**Status**: ✅ Ready to Deploy  
**Project**: Edelweiss Learning Center  
**Target**: elc-website-blv.pages.dev  
**Date**: March 17, 2026

---

## ⚡ QUICK START

### Langkah 1: Dapatkan API Token

Buka: https://dash.cloudflare.com/profile/api-tokens

- Klik **Create Token**
- Pilih **"Edit Cloudflare Workers"** template
- Klik **Create Token**
- **COPY** token (jangan share!)

### Langkah 2: Deploy

Jalankan command satu ini:

```bash
cd /var/www/html/elc-baru
export CLOUDFLARE_API_TOKEN="your-api-token-here"
bash FINAL_DEPLOY.sh
```

### Langkah 3: Selesai!

Website akan live di: **https://elc-website-blv.pages.dev**

---

## 📋 Apa yang Sudah Siap

✅ Project: Build sudah berhasil  
✅ Wrangler CLI: Terinstall (v4.74.0)  
✅ GitHub: Sudah di-push ke https://github.com/aris2394/webelc  
✅ All Pages: Playteracy, IPDC, Kurikulum, Artikel  
✅ All Assets: Images, CSS, JavaScript  
✅ Responsive: Mobile, Tablet, Desktop  

---

## 🎯 Deployment Script

File: `FINAL_DEPLOY.sh`

Yang akan dilakukan:
1. ✅ Verify Wrangler CLI
2. ✅ Build Next.js project
3. ✅ Check build output (.next folder)
4. ✅ Verify API Token
5. ✅ Deploy ke Cloudflare Pages
6. ✅ Generate live URL

---

## 🔑 API Token Setup

### Cara Mendapatkan Token:

1. Login ke Cloudflare: https://dash.cloudflare.com/
2. Go to **Account** > **API Tokens** (sidebar bawah)
3. Klik **Create Token**
4. Pilih template **Edit Cloudflare Workers**
5. Klik **Create Token**
6. Copy token yang muncul

### Set Environment Variable:

```bash
export CLOUDFLARE_API_TOKEN="your-token-string-here"
```

Atau dalam satu baris dengan deploy:

```bash
CLOUDFLARE_API_TOKEN="your-token-here" bash FINAL_DEPLOY.sh
```

---

## 📊 Project Stats

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript + CSS
- **Pages**: 10+ (Home, Programs, Kurikulum, Artikel, dll)
- **Build Time**: ~5 seconds
- **Build Size**: ~50 MB
- **Deployment**: Cloudflare Pages (Free tier)

---

## ✨ Features Implemented

✅ Responsive navbar dengan program dropdown  
✅ Playteracy page redesign (5-step process layout)  
✅ IPDC page redesign (3 sections dengan images)  
✅ Kurikulum page (integrated national & international)  
✅ Artikel/News page (3-column card grid)  
✅ All decorative assets dan images  
✅ Mobile-first responsive design  
✅ Smooth animations & transitions  

---

## 🌐 Setelah Deployment

### 1. Verifikasi Website
- Buka: https://elc-website-blv.pages.dev
- Check semua halaman berfungsi
- Test mobile responsiveness

### 2. Setup Custom Domain (Optional)
- Go to Cloudflare Pages project settings
- Add custom domain (misal: elc.example.com)
- Update DNS records

### 3. Auto-Deploy dengan GitHub (Optional)
- Connect GitHub repository
- Branch: main
- Build: npm run build
- Output: .next

---

## 🔧 Troubleshooting

**Token Error?**
- Check token at: https://dash.cloudflare.com/profile/api-tokens
- Token expire? Create new one

**Build Error?**
- Run: `npm install`
- Then: `npm run build`
- Check error messages

**Deploy Error?**
- Verify internet connection
- Check Cloudflare status: https://www.cloudflarestatus.com/
- Try again in 5 minutes

---

## 📚 Additional Resources

- **Wrangler Docs**: https://developers.cloudflare.com/workers/wrangler/
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Next.js Deploy**: https://nextjs.org/docs/deployment

---

## ✅ Deployment Checklist

Before deployment:
- [ ] API Token copied
- [ ] CLOUDFLARE_API_TOKEN env variable set
- [ ] Project folder: `/var/www/html/elc-baru`
- [ ] Wrangler installed globally: `wrangler --version`

Deployment:
- [ ] Run: `bash FINAL_DEPLOY.sh`
- [ ] Wait for build & deployment complete
- [ ] Check output URL

After deployment:
- [ ] Open website URL in browser
- [ ] Test all pages load
- [ ] Check mobile view
- [ ] Verify images are visible

---

**Project Status**: 🎉 Ready to Launch!

Deploy now with: `bash FINAL_DEPLOY.sh`

# ✨ Deploy ke Cloudflare Pages Tanpa GitHub

**Project**: Edelweiss Learning Center  
**Target**: elc-website-blv.pages.dev  
**Status**: Build Success ✅

---

## 📋 Checklist Persiapan

- [x] Build project berhasil
- [x] `.next` output folder ready
- [x] Cloudflare Wrangler sudah terinstall
- [x] Dokumentasi siap

## Langkah Deploy (Hanya 2 Step!)

### Step 1: Login ke Cloudflare (First Time Only)

Jalankan command ini:

```bash
cd /var/www/html/elc-baru
npx wrangler pages login
```

**Apa yang terjadi:**
1. Browser akan terbuka otomatis
2. Login dengan Cloudflare account Anda
3. Klik "Authorize" untuk izin Wrangler deploy
4. Browser akan close dan CLI melanjutkan

**Jika browser tidak terbuka:**
- Copy URL yang ditampilkan di terminal
- Buka di browser Anda secara manual
- Login dan authorize
- Copy authorization code kembali ke terminal

---

### Step 2: Deploy ke Cloudflare

```bash
cd /var/www/html/elc-baru
npx wrangler pages deploy .next \
  --project-name=elc-website-blv \
  --branch=main
```

**Atau gunakan script:**

```bash
cd /var/www/html/elc-baru
bash deploy.sh
```

**Expected Output:**
```
✓ Uploading files
✓ Creating deployment
✓ Successfully deployed
✓ Deployment URL: https://xxxxx.elc-website-blv.pages.dev
```

---

## 🎉 Website Anda Sudah Live!

Akses di: **https://elc-website-blv.pages.dev**

### Verifikasi Semua Halaman:

- Homepage: https://elc-website-blv.pages.dev/
- Program Playteracy: https://elc-website-blv.pages.dev/program/playteracy
- Program IPDC: https://elc-website-blv.pages.dev/program/ipdc
- Kurikulum: https://elc-website-blv.pages.dev/kurikulum
- Artikel/News: https://elc-website-blv.pages.dev/artikel

---

## 🔄 Deploy Update Website (Next Time)

Setelah mengubah code dan ingin deploy update:

```bash
cd /var/www/html/elc-baru

# 1. Build (hanya jika ada perubahan)
npm run build

# 2. Deploy (tidak perlu login lagi, otomatis)
npx wrangler pages deploy .next \
  --project-name=elc-website-blv \
  --branch=main
```

---

## 🔑 Cloudflare Credentials Management

### Check Login Status

```bash
npx wrangler whoami
```

### Logout

```bash
npx wrangler pages logout
```

### Re-login

```bash
npx wrangler pages login
```

---

## 📊 Monitor Deployment

### Lihat All Deployments

```bash
npx wrangler pages deployments list --project-name=elc-website-blv
```

### Lihat Deployment Details

```bash
npx wrangler pages deployment tail --project-name=elc-website-blv
```

---

## 🌍 Setup Custom Domain (Optional)

Jika ingin gunakan domain custom seperti `elc.edelweisslearning.id`:

### Cara 1: Via Cloudflare Dashboard

1. Buka: https://dash.cloudflare.com/
2. Go to: Pages > elc-website-blv
3. Tab: Custom Domain
4. Add your domain: `elc.edelweisslearning.id`
5. Update DNS sesuai instruksi

### Cara 2: Via CLI

```bash
npx wrangler pages domain add elc.edelweisslearning.id \
  --project-name=elc-website-blv
```

---

## ✅ Performance & Features

**Cloudflare Pages automatically provides:**

✓ Global CDN - Fast loading dari mana saja  
✓ SSL Certificate - HTTPS otomatis  
✓ Image Optimization - Compress otomatis  
✓ DDoS Protection - Enterprise-grade security  
✓ Unlimited Bandwidth - Bayar upload size saja  
✓ Uptime Monitoring - 99.95% guaranteed  

---

## 🐛 Troubleshooting

### Problem: "Not Authenticated"

```bash
# Re-login
npx wrangler pages login
```

### Problem: ".next not found"

```bash
# Rebuild
npm run build

# Verify exists
ls -la .next
```

### Problem: "Permission denied"

```bash
# Check permissions
ls -la | grep ".next"

# Or use sudo
sudo npx wrangler pages deploy .next \
  --project-name=elc-website-blv
```

### Problem: Deployment timeout

```bash
# Try again with skip caching
npx wrangler pages deploy .next \
  --project-name=elc-website-blv \
  --skip-caching
```

---

## 📚 Useful Commands Summary

```bash
# Build locally
npm run build

# Test build locally
npm run start

# Login first time
npx wrangler pages login

# Deploy
npx wrangler pages deploy .next --project-name=elc-website-blv

# Check all deployments
npx wrangler pages deployments list --project-name=elc-website-blv

# View real-time logs
npx wrangler pages deployment tail --project-name=elc-website-blv

# Logout
npx wrangler pages logout
```

---

## 🚀 Workflow untuk Update Website

```
1. Edit files di /var/www/html/elc-baru/src/app/...
2. npm run build
3. npx wrangler pages deploy .next --project-name=elc-website-blv
4. Akses https://elc-website-blv.pages.dev
5. Verifikasi perubahan live
```

---

## 🎯 Next Steps

1. ✅ **Deploy**: Jalankan command deploy di atas
2. ✅ **Verify**: Buka website dan test semua halaman
3. ✅ **Promote**: Share website URL ke tim
4. 📌 **Customize**: Setup custom domain jika ada
5. 📊 **Monitor**: Check deployment logs di dashboard

---

## 📞 Helpful Resources

- **Cloudflare Pages**: https://pages.cloudflare.com/
- **Wrangler Docs**: https://developers.cloudflare.com/workers/wrangler/
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Status Page**: https://www.cloudflarestatus.com/

---

**Created**: March 17, 2026  
**Project Status**: Production Ready ✅  
**Deployment Method**: Cloudflare Pages (Direct CLI)

Sekarang Anda siap deploy! 🚀

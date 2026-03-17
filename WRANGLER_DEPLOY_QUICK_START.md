# 🚀 DEPLOY WRANGLER CLI - QUICK START

## Langkah Cepat Deployment

### 1️⃣ Dapatkan Cloudflare API Token

Buka link ini di browser:
https://dash.cloudflare.com/profile/api-tokens

Atau:
1. Login ke https://dash.cloudflare.com/
2. Go to **Account > API Tokens** (bottom left)
3. Klik **Create Token**
4. Pilih template **"Edit Cloudflare Workers"**
5. Klik **Create Token**
6. **COPY token** (jangan bagikan ke siapa saja!)

---

### 2️⃣ Setup Token dan Deploy

Jalankan command berikut di terminal:

```bash
cd /var/www/html/elc-baru

# Set API Token (ganti dengan token Anda)
export CLOUDFLARE_API_TOKEN="your-api-token-here"

# Deploy!
bash DEPLOY_WRANGLER.sh
```

Atau dalam satu baris:

```bash
cd /var/www/html/elc-baru
CLOUDFLARE_API_TOKEN="your-api-token-here" bash DEPLOY_WRANGLER.sh
```

---

### 3️⃣ Tunggu Selesai

Deployment akan:
- ✅ Build project
- ✅ Upload ke Cloudflare
- ✅ Generate URL

**Output:**
```
✅ DEPLOYMENT BERHASIL!
🌐 URL: https://elc-website-blv.pages.dev
```

---

## Akses Website

Setelah deployment selesai:

🌐 **https://elc-website-blv.pages.dev**

---

## Troubleshooting

**Error: "API Token invalid"**
- Pastikan token di-copy seluruhnya tanpa space
- Token sudah expire? Buat token baru

**Error: "Project not found"**
- Cloudflare akan create project otomatis saat deploy
- Jika belum, create manual di https://dash.cloudflare.com/

---

## ⚙️ Advanced

### Deploy ke Custom Domain

Setelah initial deploy:

1. Buka Cloudflare Pages project
2. Go to **Settings > Custom Domain**
3. Add custom domain (misal: elc.example.com)
4. Update DNS sesuai instruksi

### Automatic Deployment dengan GitHub

Untuk auto-deploy setiap git push:

1. Connect GitHub ke Cloudflare Pages
2. Repository: https://github.com/aris2394/webelc
3. Build command: `npm run build`
4. Build output: `.next`

---

**Created**: March 17, 2026  
**Project**: Edelweiss Learning Center  
**Status**: Ready to Deploy

# 🚀 Deploy ke elc-website-blv.pages.dev

**Status**: ✅ Siap Deploy  
**Build**: ✅ Sudah Successful  
**Project URL**: https://elc-website-blv.pages.dev

---

## ⚡ Quick Deploy (3 Langkah Cepat)

### Langkah 1: Create Repository di GitHub

```bash
# Buka browser ke:
# https://github.com/new

# Isi dengan:
# - Repository name: elc-baru
# - Description: Edelweiss Learning Center Website
# - Visibility: Public
# - Jangan initialize dengan README

# Klik: Create Repository
```

### Langkah 2: Push Code ke GitHub

```bash
cd /var/www/html/elc-baru

# Ganti YOUR_USERNAME dengan username GitHub Anda
git remote add origin https://github.com/YOUR_USERNAME/elc-baru.git
git branch -M main
git push -u origin main
```

### Langkah 3: Deploy via Cloudflare Pages

1. **Buka Cloudflare Dashboard**
   ```
   https://dash.cloudflare.com/
   ```

2. **Create Pages Project**
   - Sidebar → **Pages**
   - **Create a project**
   - **Connect to Git**
   - Authorize GitHub (jika diminta)

3. **Select Repository**
   - Cari: **elc-baru**
   - Klik untuk select

4. **Setup Build Configuration**
   ```
   Production branch: main
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   ```

5. **Deploy**
   - Klik: **Save and Deploy**
   - Tunggu 2-5 menit
   - Selesai! ✨

---

## 🎯 Expected Result

Setelah deploy selesai, Anda akan mendapat:

```
✅ Project URL: https://elc-website-blv.pages.dev
✅ SSL Certificate: Auto-configured
✅ Auto Deploys: Setiap push ke GitHub
```

---

## 📋 Verification Checklist

Setelah deploy berhasil, verifikasi:

- [ ] Homepage terbuka: https://elc-website-blv.pages.dev/
- [ ] Navbar responsive
- [ ] Playteracy page: /program/playteracy
- [ ] IPDC page: /program/ipdc
- [ ] Kurikulum page: /kurikulum
- [ ] Artikel page: /artikel
- [ ] Semua gambar loaded
- [ ] Lock icon (SSL) muncul di address bar

---

## 🔄 Continuous Deployment

Setelah setup:

```bash
# Setiap kali ada perubahan:
git add .
git commit -m "Update: Your changes"
git push origin main

# Cloudflare otomatis akan:
# ✓ Detect perubahan
# ✓ Build proyek
# ✓ Deploy versi baru
# (Biasanya 1-3 menit)
```

---

## ⚠️ Troubleshooting

### Problem: "Repository not found"
**Solution**: Ganti `YOUR_USERNAME` dengan username GitHub Anda yang actual

### Problem: "Build failed"
**Solution**: 
```bash
# Test build lokal
npm run build

# Jika error, fix terlebih dahulu sebelum push
```

### Problem: "Deployment stuck"
**Solution**: 
- Check build logs di Cloudflare dashboard
- Wait 5-10 minutes
- Jika masih gagal, rollback ke previous deployment

---

## 📚 Full Documentation

Untuk info lebih detail, lihat:
- `COMPLETE_DEPLOYMENT_GUIDE.md` - Full deployment guide
- `GITHUB_DEPLOYMENT_GUIDE.md` - GitHub setup details
- `ENV_SETUP_GUIDE.md` - Environment variables

---

## 💬 Support

**Questions?** Check:
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Next.js Docs: https://nextjs.org/docs
- GitHub Docs: https://docs.github.com/

---

**Created**: March 17, 2026  
**Status**: Ready for Deployment ✅

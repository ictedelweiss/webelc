# 🚀 Panduan Lengkap: Push ke GitHub dan Deploy ke Cloudflare

**Status**: ✅ Siap untuk Deployment  
**Last Updated**: March 17, 2026  
**Project**: Edelweiss Learning Center - Next.js Website

---

## 📋 Daftar Periksa Sebelum Deployment

- [x] Semua file sudah di-commit ke git
- [x] Build test berhasil (sudah diverifikasi)
- [x] Environment variables sudah dikonfigurasi
- [x] Dependencies sudah di-install
- [x] Tidak ada error di console
- [x] Semua halaman sudah responsive

---

## 🔧 Persyaratan

1. **GitHub Account** - https://github.com/signup
2. **Cloudflare Account** - https://dash.cloudflare.com/
3. **Git Installed** - `git --version`
4. **Node.js 18+** - `node --version`

---

## 📍 LANGKAH 1: Push ke GitHub

### Opsi A: Menggunakan Interactive Script (Recommended)

```bash
cd /var/www/html/elc-baru
bash PUSH_TO_GITHUB.sh
```

Script ini akan:
1. Meminta GitHub username Anda
2. Menambahkan remote origin
3. Memverifikasi branch (ubah ke `main` jika perlu)
4. Push semua perubahan ke GitHub

### Opsi B: Manual Commands

**Step 1.1: Setup Remote Origin**

```bash
cd /var/www/html/elc-baru

# Ganti YOUR_USERNAME dengan username GitHub Anda
git remote add origin https://github.com/YOUR_USERNAME/elc-baru.git

# Verifikasi
git remote -v
```

**Output yang diharapkan:**
```
origin  https://github.com/YOUR_USERNAME/elc-baru.git (fetch)
origin  https://github.com/YOUR_USERNAME/elc-baru.git (push)
```

**Step 1.2: Verifikasi Branch**

```bash
git branch

# Output: * main
```

Jika tidak di branch `main`:
```bash
git branch -M main
```

**Step 1.3: Push ke GitHub**

```bash
git push -u origin main
```

**Output yang diharapkan:**
```
Enumerating objects: 150, done.
Counting objects: 100%, done.
...
✓ Pushed to https://github.com/YOUR_USERNAME/elc-baru.git
```

---

## 🌥️ LANGKAH 2: Deploy ke Cloudflare Pages

### Metode A: UI Setup (Recommended untuk Pertama Kali)

1. **Login ke Cloudflare**
   - Buka https://dash.cloudflare.com/
   - Sign in dengan akun Anda

2. **Buat Pages Project**
   - Dari sidebar, pilih **Pages**
   - Klik **Create a project**
   - Pilih **Connect to Git**

3. **Authorize GitHub**
   - Klik **Connect GitHub**
   - Authorize Cloudflare untuk akses repository
   - Install Cloudflare GitHub app di akun Anda

4. **Pilih Repository**
   - Cari dan pilih **elc-baru**
   - Klik **Begin setup**

5. **Build Configuration**
   - **Production branch**: `main`
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - Klik **Save and Deploy**

6. **Tunggu Deployment**
   - Cloudflare akan otomatis build dan deploy
   - Lihat logs di dashboard
   - Setelah selesai, project URL akan muncul

**Project URL akan terlihat seperti:**
```
https://elc-baru.pages.dev
```

### Metode B: CLI Setup (Advanced)

Jika sudah familiar dengan CLI:

```bash
# 1. Install Wrangler (Cloudflare CLI)
npm install -g @cloudflare/wrangler

# 2. Login ke Cloudflare
wrangler login

# 3. Deploy ke Pages
wrangler pages deploy dist --project-name=elc-baru
```

---

## 🔗 LANGKAH 3: Setup Custom Domain (Optional)

Jika ingin menggunakan domain custom seperti `edelweisslearning.id`:

1. **Di Cloudflare Pages Project Settings**
   - Buka project Anda
   - Go to **Settings** > **Custom domain**
   - Klik **Add custom domain**

2. **Masukkan Domain**
   - Input: `www.edelweisslearning.id` atau `edelweisslearning.id`
   - Klik **Continue**

3. **Update DNS**
   - Cloudflare akan provide CNAME record
   - Masuk ke DNS provider Anda (jika berbeda dari Cloudflare)
   - Update DNS record sesuai instruksi
   - Tunggu DNS propagation (5-48 jam)

4. **Verifikasi**
   - Akses domain Anda
   - SSL certificate akan auto-generate dalam 15-30 menit

---

## 🔄 LANGKAH 4: Setup Continuous Deployment

Setelah initial deploy, setiap kali Anda push ke GitHub, Cloudflare akan otomatis rebuild dan deploy.

### Workflow Pengembangan:

```bash
# 1. Buat perubahan
nano src/app/page.tsx  # atau edit file lain

# 2. Test lokal
npm run dev
# Buka http://localhost:3000 dan verifikasi

# 3. Commit perubahan
git add .
git commit -m "Fix: Update homepage content"

# 4. Push ke GitHub (OTOMATIS TRIGGER DEPLOY DI CLOUDFLARE)
git push origin main

# 5. Monitor deployment
# Buka https://dash.cloudflare.com/ > Pages > elc-baru
# Lihat status di Deployments tab
```

---

## ✅ Verifikasi Deployment

### Checklist Post-Deployment:

1. **Cek Website Accessibility**
   ```bash
   curl https://elc-baru.pages.dev
   # Expected: 200 OK
   ```

2. **Verifikasi Halaman Utama**
   - Homepage: https://elc-baru.pages.dev/
   - Navbar sudah responsive
   - Links berfungsi

3. **Test All Updated Pages**
   - Playteracy: https://elc-baru.pages.dev/program/playteracy
   - IPDC: https://elc-baru.pages.dev/program/ipdc
   - Kurikulum: https://elc-baru.pages.dev/kurikulum
   - Artikel: https://elc-baru.pages.dev/artikel

4. **Performance Check**
   - Buka PageSpeed Insights: https://pagespeed.web.dev/
   - Input URL Anda
   - Lihat performance score

5. **SSL Certificate**
   - Lihat lock icon di address bar
   - Klik lock > Certificate Info
   - Verify certificate valid

---

## 🐛 Troubleshooting

### Problem: "fatal: 'origin' does not appear to be a 'git' repository"

**Solution:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/elc-baru.git
git push -u origin main
```

---

### Problem: "Permission denied (publickey)"

**Solution 1: Gunakan HTTPS dengan Token**
```bash
# Buat Personal Access Token di GitHub:
# Settings > Developer settings > Personal access tokens > Generate new token

# Update remote URL:
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/elc-baru.git
```

**Solution 2: Setup SSH Key**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add ke GitHub: Settings > SSH and GPG keys > New SSH key
# Paste public key

# Update remote URL:
git remote set-url origin git@github.com:YOUR_USERNAME/elc-baru.git
```

---

### Problem: "Deployment failed at build stage"

**Solution:**
1. Check Cloudflare build logs
2. Run build lokal untuk reproduksi:
   ```bash
   npm install
   npm run build
   ```
3. Fix error berdasarkan message
4. Commit dan push

---

### Problem: "Custom domain not working"

**Solution:**
1. Verify DNS record di provider Anda
2. Wait 24-48 jam untuk DNS propagation
3. Check DNS propagation: https://www.whatsmydns.net/
4. Contact Cloudflare support jika masalah persist

---

## 📊 Monitoring dan Maintenance

### Daily Monitoring:

```bash
# Check deployment status
curl -I https://elc-baru.pages.dev

# Check build logs di Cloudflare Dashboard
# https://dash.cloudflare.com/ > Pages > elc-baru > Deployments
```

### Weekly Checks:

- [ ] Buka website dan verifikasi semua page berfungsi
- [ ] Check PageSpeed Insights score
- [ ] Review Cloudflare analytics (jika domain connected)
- [ ] Check error logs jika ada

### Monthly Maintenance:

- [ ] Update dependencies: `npm update`
- [ ] Run security audit: `npm audit fix`
- [ ] Test semua features
- [ ] Update documentation jika ada perubahan

---

## 🚀 Scaling & Performance Tips

1. **Enable Cloudflare Optimizations**
   - Brace Acceleration
   - Minify JS/CSS
   - Image optimization

2. **Improve Core Web Vitals**
   - Optimize images
   - Lazy load components
   - Minimize JavaScript

3. **Setup Analytics**
   - Di Cloudflare Pages settings
   - Enable analytics untuk traffic insights

4. **Setup Email Notifications**
   - Failed deployment alerts
   - Performance degradation alerts

---

## 📚 Referensi Berguna

| Resource | Link |
|----------|------|
| GitHub Docs | https://docs.github.com/ |
| Cloudflare Pages | https://developers.cloudflare.com/pages/ |
| Next.js Deployment | https://nextjs.org/docs/deployment |
| Cloudflare CLI | https://developers.cloudflare.com/workers/wrangler/ |
| Git Documentation | https://git-scm.com/doc |

---

## 💡 FAQ

**Q: Berapa lama deployment?**
A: 2-5 menit untuk build dan deploy awal. Untuk update selanjutnya tergantung size changes, biasanya 1-3 menit.

**Q: Apakah free tier Cloudflare cukup?**
A: Ya, Cloudflare Pages free tier sudah cukup untuk website ini dengan unlimited bandwidth.

**Q: Bagaimana jika ada error di production?**
A: Rollback ke previous deployment via Cloudflare dashboard > Deployments > click previous > Rollback

**Q: Bisa pakai database?**
A: Untuk database, bisa gunakan Cloudflare D1 (SQLite) atau Supabase, Firebase, dll.

**Q: Apakah data aman?**
A: Yes, Cloudflare provide enterprise-grade security dan DDoS protection.

---

## ✨ Berikutnya

Setelah deployment berhasil:

1. ✅ Update website domain di semua tempat (business cards, email, dll)
2. ✅ Setup email notifications untuk failed deployments
3. ✅ Configure analytics
4. ✅ Setup custom error pages (404, 500)
5. ✅ Test performance dan optimize

---

**Created**: March 17, 2026  
**Status**: Ready for Deployment  
**Last Verified**: March 17, 2026

For questions or issues, contact: dev@edelweisslearning.id

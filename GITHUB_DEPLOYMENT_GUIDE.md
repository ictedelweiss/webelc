# GitHub dan Cloudflare Deployment Guide

## Status Saat Ini

✅ Git repository sudah dikonfigurasi dengan baik
✅ Semua file telah di-commit dengan pesan: "Update: Complete redesign of Playteracy, IPDC, Kurikulum, and Artikel pages with improved layouts and images"
✅ Branch: `main`

## Langkah 1: Setup GitHub Remote

### Opsi A: Jika Anda Sudah Memiliki Repository di GitHub

```bash
cd /var/www/html/elc-baru

# Add remote origin (ganti dengan URL repository Anda)
git remote add origin https://github.com/YOUR_USERNAME/elc-baru.git

# Verify remote
git remote -v

# Push ke GitHub (ganti branch sesuai kebutuhan)
git branch -M main
git push -u origin main
```

### Opsi B: Membuat Repository Baru di GitHub

1. Buka https://github.com/new
2. Beri nama: `elc-baru`
3. Deskripsi: "Edelweiss Learning Center - Modern Next.js Website"
4. Pilih **Public** atau **Private**
5. Jangan inisialisasi dengan README (repository sudah ada)
6. Klik **Create Repository**

Kemudian jalankan:

```bash
cd /var/www/html/elc-baru
git remote add origin https://github.com/YOUR_USERNAME/elc-baru.git
git branch -M main
git push -u origin main
```

### Opsi C: Jika Repository Sudah Ada (Update Remote)

```bash
cd /var/www/html/elc-baru
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/elc-baru.git
git push -u origin main
```

## Langkah 2: Deploy ke Cloudflare Pages

### Persiapan

1. Buat akun Cloudflare (jika belum): https://dash.cloudflare.com/
2. Verifikasi email Anda
3. Setup domain Anda di Cloudflare (opsional)

### Koneksi GitHub ke Cloudflare Pages

1. Login ke Cloudflare Dashboard
2. Pilih **Pages** dari sidebar
3. Klik **Create a project**
4. Pilih **Connect to Git**
5. Authorisasi GitHub (jika diminta)
6. Pilih repository `elc-baru`
7. Pilih branch `main`

### Konfigurasi Build Settings

- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Environment variables**:
  - `NODE_ENV`: production
  - `NEXT_PUBLIC_ENVIRONMENT`: production

### Deploy

Klik **Save and Deploy** untuk melakukan deployment pertama.

Cloudflare akan secara otomatis:
- Build proyek
- Deploy ke network global Cloudflare
- Memberikan URL: `https://[project-name].pages.dev`

### Setup Custom Domain (Opsional)

1. Di Cloudflare Pages project settings
2. Pilih **Custom domain**
3. Masukkan domain Anda (misal: `www.edelweisslearning.id`)
4. Follow instruksi untuk update DNS

## Langkah 3: Continuous Deployment

Setelah setup initial:

1. Setiap kali Anda push ke GitHub (`git push origin main`)
2. Cloudflare Pages akan otomatis:
   - Detect perubahan
   - Rebuild proyek
   - Deploy versi baru

## Perintah Cepat untuk Push

```bash
cd /var/www/html/elc-baru

# Buat perubahan
# ... edit files ...

# Commit perubahan
git add -A
git commit -m "Deskripsi perubahan Anda"

# Push ke GitHub (otomatis trigger deploy di Cloudflare)
git push origin main
```

## Troubleshooting

### Error: "fatal: 'origin' does not appear to be a 'git' repository"

```bash
git remote add origin https://github.com/YOUR_USERNAME/elc-baru.git
```

### Error: "Permission denied (publickey)"

Setup SSH key:

```bash
ssh-keygen -t ed25519 -C "dev@edelweisslearning.id"
# Copy output ke https://github.com/settings/keys
```

Atau gunakan HTTPS dengan Personal Access Token:

```bash
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/elc-baru.git
```

### Build Gagal di Cloudflare

1. Check build logs di Cloudflare Pages dashboard
2. Pastikan `package.json` memiliki dependencies yang benar
3. Jalankan `npm install` dan `npm run build` secara lokal terlebih dahulu
4. Fix error, commit, push, dan retry

## Next Steps

1. **GitHub**: Push repository dengan `git push origin main`
2. **Cloudflare**: Connect GitHub repository ke Cloudflare Pages
3. **Monitoring**: Setup alerts untuk failed deployments
4. **Custom Domain**: Konfigurasi domain custom untuk website

## Timeline Estimasi

- Setup GitHub: 5 menit
- Connect Cloudflare: 10 menit
- Initial Deploy: 2-5 menit
- Custom Domain: 15 menit

**Total: ~30-40 menit**

## Helpful Links

- GitHub Documentation: https://docs.github.com/
- Cloudflare Pages Guide: https://developers.cloudflare.com/pages/
- Next.js Deployment: https://nextjs.org/docs/deployment
- Cloudflare CLI (Wrangler): https://developers.cloudflare.com/workers/wrangler/

---

**Created**: March 17, 2026
**Status**: Ready for Deployment
**Project**: Edelweiss Learning Center - Next.js Website

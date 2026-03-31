# Solusi Koneksi Database DomaiNesia (Cloudflare Pages vs cPanel)

Kendala utama saat ini adalah: domain utama `edelweisslearningcenter.com` di-host (diarahkan ke) **Cloudflare Pages**, yang hanya melayani file statis Frontend. Akibatnya, request ke `https://edelweisslearningcenter.com/api-elc/articles.php` akan ditolak dengan error **404 Page Not Found** karena Cloudflare Pages tidak bisa menjalankan file PHP.

**Solusinya:** Kita harus memisahkan jalur untuk Backend PHP menggunakan **Subdomain Khusus (Contoh: api.edelweisslearningcenter.com)** yang langsung mengarah ke Server cPanel DomaiNesia.

Silakan ikuti langkah-langkah di bawah ini:

## Langkah 1: Buat Subdomain di cPanel DomaiNesia
1. Login ke akun cPanel DomaiNesia Anda.
2. Cari menu **Domains** atau **Subdomains**.
3. Buat subdomain baru dengan nama: `api` (sehingga menjadi `api.edelweisslearningcenter.com`).
4. Atur Document Root ke direktori baru, misalnya `/public_html/api` (atau biarkan default yang dibuat cPanel).

## Langkah 2: Tambahkan DNS Record di Cloudflare
*(Jika Name Server / DNS domain Anda dikelola oleh Cloudflare)*:
1. Buka dashboard Cloudflare Anda.
2. Ke menu **DNS** -> **Records**.
3. Tambahkan Record baru:
   - **Type**: `A`
   - **Name**: `api`
   - **IPv4 address**: *(Masukkan IP Address dari server Hosting DomaiNesia Anda)*. Anda dapat melihat IP address hosting ini di sisi kanan *dashboard cPanel* pada bagian `Shared IP Address`.
   - **Proxy status**: Pastikan menyala (Warna oranye / Proxied) agar dilindungi SSL Cloudflare, atau dimatikan (DNS Only - Gray cloud). Disarankan `Proxied`.
   - Klik **Save**.

## Langkah 3: Upload File Backend
1. Kembali ke cPanel DomaiNesia, buka **File Manager**.
2. Masuk ke folder document root subdomain yang Anda buat di Langkah 1 (contoh: `public_html/api/`).
3. **Upload SEMUA isi dari folder `php-backend/`** (termasuk file `.htaccess`) ke dalam folder tersebut.

## Langkah 4: Jalankan Setup Database
1. Buka browser baru dan akses URL berikut:
   ```
   https://api.edelweisslearningcenter.com/setup.php
   ```
2. Jika berhasil, Anda akan melihat pesan:
   `{"success":true,"message":"Table articles is ready..."}`
3. **PENTING:** Hapus file `setup.php` dari File Manager setelah langkah ini berhasil!

## Langkah 5: Verifikasi API & Selesai!
Buka URL:
```
https://api.edelweisslearningcenter.com/articles.php
```
Seharusnya mengembalikan JSON kosong `[]`.

Jika langkah-langkah ini selesai, **Backend (di DomaiNesia)** akan siap terkoneksi penuh dengan **Frontend (di Cloudflare Pages/Lokal)**!
Frontend lokal dan cloud Anda telah saya perbarui kodenya agar menunjuk langsung ke `https://api.edelweisslearningcenter.com`.

Coba lakukan login kembali di `/admin/login`!

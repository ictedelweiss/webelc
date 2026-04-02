# 📖 PANDUAN CMS ARTIKEL - BEST PRACTICES

## 1️⃣ TEXT EDITOR - FORMATTING GUIDE

### Toolbar Formatting
Toolbar di atas text editor menyediakan tombol formatting:

| Tombol | Fungsi | Contoh |
|--------|--------|--------|
| **B** | Bold (Tebal) | `<b>teks tebal</b>` |
| **I** | Italic (Miring) | `<i>teks miring</i>` |
| **U** | Underline (Garis Bawah) | `<u>teks bergaris bawah</u>` |
| **H2** | Heading 2 (Judul Besar) | `<h2>Judul Utama</h2>` |
| **H3** | Heading 3 (Judul Kecil) | `<h3>Judul Sub</h3>` |
| **P** | Paragraph (Paragraf) | `<p>Teks paragraf</p>` |
| **•** | Bullet List (Daftar Poin) | `<ul><li>Item 1</li></ul>` |
| **1.** | Numbered List (Daftar Bernomor) | `<ol><li>Item 1</li></ol>` |
| **Link** | Hyperlink | `<a href="#">Link text</a>` |
| **Code** | Code Block | `<code>code here</code>` |

### Cara Menggunakan Toolbar
1. **Pilih teks** di editor
2. **Klik tombol formatting** yang diinginkan (mis: Bold)
3. Teks akan otomatis dibungkus dengan tag HTML

### Contoh Artikel Lengkap

```html
<h2>Cara Belajar Bahasa Inggris Efektif</h2>

<p>Belajar bahasa Inggris memerlukan <b>konsistensi</b> dan <i>strategi yang tepat</i>.</p>

<h3>Tips Penting</h3>

<ul>
<li>Dengarkan musik berbahasa Inggris setiap hari</li>
<li>Baca buku atau artikel dalam bahasa Inggris</li>
<li>Bergaul dengan native speaker</li>
</ul>

<p>Dengan <b>dedikasi</b>, Anda pasti bisa menguasai bahasa Inggris!</p>

<h3>Resource Bermanfaat</h3>

<ol>
<li><a href="https://www.duolingo.com">Duolingo - Belajar Interaktif</a></li>
<li><a href="https://www.tedtalk.com">TED Talks - Listening Practice</a></li>
<li><a href="https://www.english-online.com">English Online - Grammar</a></li>
</ol>
```

---

## 2️⃣ RESPONSIVE IMAGE HANDLING

### Gambar Otomatis Respons di Semua Device

**BAIK KABAR:** Semua gambar di artikel secara otomatis akan:
- ✅ Menyesuaikan ukuran dengan lebar layar
- ✅ Tampilannya bagus di mobile, tablet, dan desktop
- ✅ Tidak perlu diedit satu-satu by admin!

### Cara Menambah Gambar di Artikel

#### Opsi 1: Upload Gambar (Recommended)
1. Scroll ke field "Gambar Thumbnail"
2. Drag-drop gambar atau klik untuk upload
3. Gambar akan otomatis di-resize dan di-optimize
4. URL gambar akan muncul di field

#### Opsi 2: Gunakan URL Manually
1. Jika sudah punya URL gambar: masukkan ke field "Atau masukkan URL manual"
2. Contoh: `https://example.com/images/photo.jpg`

### Ukuran Gambar yang Disarankan

| Tipe | Ukuran Optimal | Format | Ukuran File |
|------|----------------|--------|-------------|
| **Thumbnail** | 800x600px | JPG/PNG/WEBP | < 500KB |
| **Cover/Hero** | 1200x800px | JPG/PNG/WEBP | < 1MB |
| **In-content** | 600-800px width | JPG/PNG | < 500KB |

### Ukuran Gambar di Berbagai Device (Otomatis)

```
Desktop (1280px width):  Gambar tampil 100% dari lebar konten
Tablet (768px width):    Gambar otomatis resize ke proporsi tablet
Mobile (375px width):    Gambar otomatis resize ke ukuran mobile
```

**Anda tidak perlu apa-apa!** Sistem sudah handle semuanya.

### Pro Tips untuk Gambar
1. **Gunakan JPG untuk foto** (lebih kecil)
2. **Gunakan PNG untuk grafis/screenshot** (lebih jernih)
3. **Compress gambar** sebelum upload (gunakan tool online jika perlu)
4. **Hindari gambar terlalu besar** (> 2MB akan ditolak)
5. **Gunakan gambar dengan aspect ratio landscape** (lebih bagus untuk artikel)

---

## 3️⃣ FORM VALIDATION & CONFIRMATION

### Required Fields (Wajib Diisi)
- ✅ **Judul Artikel** - Harus diisi (tidak boleh kosong)
- ✅ **URL Slug** - Harus unik (tidak boleh sama dengan artikel lain)
- ✅ **Konten Artikel** - Harus ada (minimal 1 karakter)

### Optional Fields (Boleh Kosong)
- Gambar Thumbnail
- Ringkasan/Excerpt

### Konfirmasi Sebelum Menyimpan

Saat Anda klik **"Simpan Artikel"**, akan muncul dialog konfirmasi:
```
"Simpan Artikel Baru?"
Anda akan menyimpan artikel "Judul" ke database.
Pastikan semua data sudah benar sebelum melanjutkan.

[Batal]  [Ya, Simpan]
```

**Fitur ini** memastikan Anda tidak salah-klik saat ingin menyimpan.

### Proses Edit & Delete

- **Edit**: Klik artikel → ubah field → dialog konfirmasi muncul → klik "Ya, Update"
- **Delete**: Klik "Hapus" → dialog warning (RED) → klik "Ya, Hapus"

---

## 4️⃣ FORMATTING TIPS & TRICKS

### Membuat Artikel Terstruktur

```html
<h2>Main Topic</h2>
<p>Introduction paragraph here...</p>

<h3>Subtopic 1</h3>
<p>Content untuk subtopic 1...</p>

<h3>Subtopic 2</h3>
<p>Content untuk subtopic 2...</p>

<h3>Kesimpulan</h3>
<p>Final thoughts...</p>
```

### Membuat List Berkualitas

**Bullet List:**
```html
<ul>
<li>Point pertama</li>
<li>Point kedua</li>
<li>Point ketiga</li>
</ul>
```

**Numbered List:**
```html
<ol>
<li>Step 1 - Buat akun</li>
<li>Step 2 - Login</li>
<li>Step 3 - Mulai belajar</li>
</ol>
```

### Highlight Text Penting

```html
Anda harus <b>perhatikan</b> konsep <i>dasar terlebih dahulu</i>.
Jangan <u>skipkan materi fundamental</u>.
```

### Menambah Link

```html
Untuk info lebih lanjut, <a href="https://example.com">klik di sini</a>.
```

---

## 5️⃣ COMMON MISTAKES & SOLUTIONS

### ❌ Mistake: Gambar tidak muncul
- **Solusi**: Pastikan URL gambar benar dan file masih ada di server

### ❌ Mistake: Formatting tidak work
- **Solusi**: Gunakan toolbar atau ketik HTML tag dengan benar
- **Wrong**: `<b>text</b` (missing >)
- **Right**: `<b>text</b>`

### ❌ Mistake: Slug sudah digunakan
- **Solusi**: Ubah slug ke yang berbeda atau gunakan yang unik

### ❌ Mistake: Artikel tidak tersimpan
- **Solusi**: Cek koneksi internet, pastikan semua field required sudah diisi

---

## 6️⃣ KEYBOARD SHORTCUTS

| Action | Shortcut |
|--------|----------|
| Bold | Pilih text → klik B |
| Italic | Pilih text → klik I |
| Bold (Manual) | `<b>text</b>` |
| Italic (Manual) | `<i>text</i>` |

---

## 🚀 QUICK START - MEMBUAT ARTIKEL BARU

```
1. Klik "Tambah Artikel" di dashboard
2. Isi Judul (admin akan auto-generate slug)
3. Klik "B", "I", "H2" dll untuk format text
4. Upload gambar atau masukkan URL
5. Isi ringkasan (optional)
6. Tulis konten dengan formatting
7. Klik "Simpan Artikel"
8. Konfirmasi di dialog → "Ya, Simpan"
9. Selesai! Artikel tersimpan di database
```

---

## 📞 BANTUAN

Jika ada masalah:
1. **Text tidak terlihat?** → Cek warna teks (harus gelap, bukan abu-abu)
2. **Gambar tidak muncul?** → Cek URL atau upload ulang
3. **Form tidak bisa submit?** → Pastikan judul & slug valid
4. **Server error?** → Refresh halaman atau hubungi developer

---

**Happy writing! 🎉**

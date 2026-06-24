# Audit SEO Edelweiss Learning Center

Tanggal audit: 24 Juni 2026  
Ruang lingkup: pemeriksaan source code dan hasil production build, tanpa mengubah konten website.

## Kesimpulan

Website **sudah memiliki fondasi SEO dasar**, tetapi **belum optimal**. Estimasi kesiapan teknis SEO saat ini sekitar **60/100**.

Hal yang sudah baik:

- Setiap halaman utama, kecuali `/foundation`, sudah memiliki title dan meta description.
- Open Graph dasar sudah tersedia.
- `robots.txt` dan `sitemap.xml` sudah tersedia.
- Halaman publik berhasil diprerender sebagai HTML statis.
- Homepage mempunyai structured data `EducationalOrganization`.
- Mayoritas halaman program mempunyai satu `h1` dan susunan heading yang cukup baik.
- Navigasi internal menuju halaman-halaman penting sudah tersedia.
- Production build berhasil tanpa error.

Masalah yang paling berdampak:

1. Detail artikel hanya tersedia melalui `/artikel?slug=...`, dimuat lewat JavaScript setelah halaman terbuka, dan semua artikel memakai metadata halaman daftar artikel.
2. Versi Indonesia dan Inggris berada pada URL yang sama serta dipilih melalui `localStorage`. Mesin pencari tidak memperoleh URL, canonical, metadata, dan `hreflang` terpisah untuk versi Inggris.
3. Canonical URL belum didefinisikan secara eksplisit.
4. Halaman `/foundation` tidak mempunyai metadata khusus dan tidak mempunyai heading semantik `h1`.
5. Sitemap masih manual, memakai tanggal yang sama untuk semua halaman, dan tidak memasukkan detail artikel.
6. Halaman admin diblokir melalui `robots.txt`, tetapi belum diberi `noindex`.
7. Structured data masih terbatas pada homepage dan berpotensi tampil dua kali setelah pengguna mengganti bahasa.
8. Optimasi gambar dan Core Web Vitals masih dapat ditingkatkan.

## Tahapan optimasi

### Prioritas 0 — Pengukuran awal

- [ ] Daftarkan dan verifikasi domain di Google Search Console dan Bing Webmaster Tools.
- [ ] Kirim `https://www.edelweisslearningcenter.com/sitemap.xml`.
- [ ] Periksa status indexing, duplicate URL, canonical yang dipilih Google, dan halaman yang ditemukan tetapi belum diindeks.
- [ ] Jalankan PageSpeed Insights untuk homepage, halaman program, artikel, dan kontak pada perangkat mobile.
- [ ] Simpan baseline: jumlah halaman terindeks, impressions, clicks, CTR, posisi keyword, LCP, INP, dan CLS.

Kriteria selesai: data awal tersedia dan dapat dibandingkan setelah implementasi.

### Prioritas 1 — Jadikan artikel benar-benar dapat diindeks

- [x] Ubah URL detail dari `/artikel?slug=judul` menjadi route stabil seperti `/artikel/judul`.
- [x] Buat halaman detail artikel sebagai Server Component atau static generation.
- [x] Ambil data artikel sebelum HTML dikirim, bukan hanya melalui `useEffect`.
- [x] Buat `generateMetadata()` per artikel: title, description, canonical, Open Graph image, `publishedTime`, dan `modifiedTime`.
- [x] Tambahkan structured data `Article` atau `BlogPosting`.
- [x] Masukkan seluruh URL artikel yang published ke sitemap beserta `lastmod` aktual.
- [x] Pastikan artikel yang tidak ditemukan mengembalikan HTTP 404, bukan halaman 200 bertuliskan “tidak ditemukan”.
- [ ] Tambahkan internal link ke artikel terkait dan halaman program yang relevan.
- [ ] Otomatiskan rebuild/deploy setiap artikel diterbitkan agar static export segera memuat artikel baru.

Kriteria selesai: View Source pada setiap URL artikel sudah berisi judul dan isi artikel, metadata unik, canonical sendiri, schema valid, serta HTTP status yang benar.

### Prioritas 2 — Perbaiki arsitektur multilingual

Pilihan yang direkomendasikan:

- Bahasa Indonesia: `/id/...`
- Bahasa Inggris: `/en/...`

Alternatif yang lebih ringan adalah mempertahankan bahasa Indonesia tanpa prefix dan memakai `/en/...` untuk bahasa Inggris.

Langkah:

- [x] Sediakan URL terpisah untuk setiap bahasa.
- [x] Render bahasa berdasarkan route/server, bukan hanya `localStorage`.
- [x] Berikan title dan description sesuai bahasa pada masing-masing URL.
- [x] Tambahkan `alternates.languages`/`hreflang` untuk `id-ID`, `en`, dan `x-default`.
- [x] Set atribut bahasa Inggris pada subtree dan sinkronkan `<html lang>` saat route Inggris dimuat.
- [x] Buat canonical yang mengarah ke URL bahasa yang sedang dibuka.
- [x] Masukkan kedua versi bahasa ke sitemap.
- [x] Language switcher harus mengarah ke pasangan URL yang setara.

Kriteria selesai: crawler dapat menemukan, merender, dan mengindeks versi Indonesia dan Inggris secara independen tanpa dianggap duplikat.

### Prioritas 3 — Lengkapi metadata dan kontrol indexing

- [x] Tambahkan canonical eksplisit pada semua halaman publik.
- [x] Tambahkan metadata unik untuk `/foundation`.
- [x] Tambahkan Open Graph image yang relevan per program, tidak hanya memakai fallback global.
- [ ] Lengkapi Twitter metadata bila halaman dibagikan secara aktif.
- [x] Terapkan `robots: { index: false, follow: false }` pada seluruh layout/halaman admin.
- [x] Jangan mengandalkan `robots.txt` saja untuk mencegah halaman admin masuk indeks.
- [x] Pastikan preview branch Cloudflare memakai `noindex`.
- [x] Periksa konsistensi domain `www`, HTTPS, trailing slash, dan redirect ke satu versi utama.

Kriteria selesai: setiap URL publik mempunyai metadata unik dan satu canonical; semua halaman privat/staging mempunyai `noindex`.

### Prioritas 4 — Heading dan HTML semantik

- [ ] Ubah judul utama `/foundation` dari elemen `<p>` menjadi satu `<h1>`.
- [ ] Ubah judul utama `/program` dari `<h2>` menjadi satu `<h1>`.
- [ ] Ubah judul daftar `/artikel` dari `<h2>` menjadi satu `<h1>`.
- [ ] Pastikan setiap halaman hanya mempunyai satu heading utama yang menjelaskan intent halaman.
- [ ] Gunakan urutan `h1` → `h2` → `h3` tanpa bergantung pada ukuran visual.
- [ ] Ubah breadcrumb visual menjadi navigasi `<nav aria-label="Breadcrumb">`.
- [ ] Tambahkan schema `BreadcrumbList` pada halaman dalam.
- [ ] Gunakan elemen `<article>` untuk kartu dan detail artikel, serta `<time dateTime>` pada tanggal daftar artikel.

Catatan: perubahan ini tidak perlu mengubah kata-kata yang tampil; hanya elemen HTML-nya.

### Prioritas 5 — Structured data

- [ ] Pertahankan satu schema organisasi utama, idealnya ditempatkan pada layout atau homepage server-rendered.
- [ ] Pastikan schema tidak terduplikasi ketika bahasa diganti di sisi client.
- [ ] Lengkapi `EducationalOrganization` dengan `sameAs`, koordinat/lokasi, jam operasional, dan data legal hanya jika faktual.
- [ ] Tambahkan `Course` pada halaman program individual.
- [ ] Tambahkan `Article`/`BlogPosting` pada artikel.
- [ ] Tambahkan `BreadcrumbList` pada halaman selain homepage.
- [ ] Tambahkan schema FAQ hanya jika FAQ benar-benar tampil di halaman.
- [ ] Validasi menggunakan Rich Results Test dan Schema Markup Validator.

Kriteria selesai: tidak ada error schema dan semua properti berasal dari informasi nyata yang tampil atau dapat diverifikasi.

### Prioritas 6 — Sitemap dan robots

- [ ] Ganti sitemap manual dengan `src/app/sitemap.ts` atau generator saat deploy.
- [ ] Gunakan `lastModified` yang sesuai perubahan nyata; jangan mengganti tanggal bila isi tidak berubah.
- [ ] Masukkan URL detail artikel dan seluruh URL bahasa.
- [ ] Jangan masukkan URL admin, query/filter, halaman 404, atau URL canonical alternatif.
- [ ] Pertahankan referensi sitemap pada `robots.txt`.
- [ ] Setelah deploy, uji bahwa sitemap dapat diakses, valid XML, dan semua URL mengembalikan 200.

### Prioritas 7 — Gambar dan performa

- [ ] Audit LCP pada hero slider dan halaman program.
- [ ] Gunakan `next/image` atau mekanisme gambar responsif untuk menghasilkan ukuran yang sesuai viewport.
- [ ] Berikan `width` dan `height`/aspect ratio agar layout tidak bergeser.
- [ ] Prioritaskan hanya gambar LCP; lazy-load gambar di bawah fold.
- [ ] Konversi PNG fotografis besar ke WebP/AVIF bila kualitas visual tetap terjaga.
- [ ] Gunakan `alt=""` untuk dekorasi murni; gunakan alt deskriptif untuk gambar yang membawa informasi.
- [ ] Hindari alt generik seperti “Decoration”, “Kurikulum 1”, atau “Kurikulum 2” pada gambar informatif.
- [ ] Periksa ukuran JavaScript client, terutama slider, language switcher, dan daftar artikel.
- [ ] Targetkan Core Web Vitals: LCP ≤ 2,5 detik, INP ≤ 200 ms, CLS ≤ 0,1 pada persentil ke-75.

### Prioritas 8 — Local SEO dan trust

- [ ] Konsistenkan nama, alamat, dan telepon pada website, Google Business Profile, dan direktori resmi.
- [ ] Tautkan alamat ke profil Google Maps/Google Business yang benar.
- [ ] Tambahkan jam operasional yang aktual.
- [ ] Tambahkan link akun sosial resmi melalui `sameAs`.
- [ ] Pastikan klaim seperti ISO 21001, tahun berdiri, Pearson Edexcel, Letterland, dan cakupan negara dapat dibuktikan.
- [ ] Tampilkan informasi penanggung jawab/penulis dan tanggal update pada artikel.
- [ ] Tambahkan halaman kebijakan privasi dan syarat penggunaan bila formulir, analytics, atau tracking digunakan.

### Prioritas 9 — Strategi konten tanpa mengubah halaman saat ini

- [ ] Lakukan riset keyword berdasarkan intent dan lokasi, bukan hanya volume.
- [ ] Tetapkan satu keyword utama dan beberapa variasi untuk tiap landing page.
- [ ] Hindari beberapa halaman menargetkan intent yang sama.
- [ ] Buat content cluster: homeschooling Bekasi, kursus Inggris anak, phonics anak, kurikulum internasional, dan pelatihan guru.
- [ ] Hubungkan artikel ke landing page program dengan anchor text yang natural.
- [ ] Perbarui artikel lama bila informasi berubah dan catat tanggal pembaruannya.
- [ ] Hindari artikel tipis, duplikat, atau dibuat massal tanpa nilai praktis.

## Urutan pengerjaan yang disarankan

### Minggu 1

1. Pasang alat ukur dan ambil baseline.
2. Tambahkan `noindex` admin dan canonical.
3. Lengkapi metadata serta `h1` halaman yang masih kurang.
4. Buat sitemap dinamis.

### Minggu 2

1. Migrasikan detail artikel ke `/artikel/[slug]`.
2. Tambahkan metadata, status 404, schema, dan sitemap artikel.
3. Pastikan isi artikel tersedia pada HTML awal.

### Minggu 3

1. Implementasikan URL terpisah untuk bahasa Indonesia dan Inggris.
2. Tambahkan `hreflang`, canonical bahasa, dan sitemap multilingual.
3. Validasi redirect dan duplikasi URL.

### Minggu 4

1. Optimalkan gambar dan Core Web Vitals.
2. Lengkapi structured data dan breadcrumb.
3. Perbaiki local SEO dan internal linking.
4. Minta indexing ulang untuk halaman prioritas dan pantau hasil.

## Checklist validasi setelah implementasi

- [ ] `npm run build` berhasil.
- [ ] Semua halaman publik mengembalikan HTTP 200.
- [ ] URL yang tidak ada mengembalikan HTTP 404.
- [ ] Setiap halaman mempunyai tepat satu title, description, canonical, dan `h1`.
- [ ] View Source berisi konten utama, bukan hanya loading state.
- [ ] URL bahasa mempunyai `hreflang` timbal balik.
- [ ] Sitemap hanya memuat URL canonical dan tanggal valid.
- [ ] Halaman admin dan staging mempunyai `noindex`.
- [ ] Rich Results Test tidak menampilkan error.
- [ ] Lighthouse/PageSpeed diuji pada mobile dan desktop.
- [ ] Search Console tidak melaporkan masalah sitemap, canonical, atau duplicate page baru.

## Catatan audit kode

- Production build berhasil dan menghasilkan halaman publik statis.
- `public/robots.txt` sudah mengizinkan crawler dan menunjuk ke sitemap.
- `public/sitemap.xml` sudah mencakup landing page utama, tetapi belum detail artikel atau versi bahasa.
- `/foundation` memakai metadata global karena tidak mempunyai metadata halaman sendiri.
- Daftar dan detail artikel mengambil data dari API setelah hydration.
- Seluruh detail artikel berbagi route dan metadata `/artikel`.
- Bahasa Inggris dipilih client-side menggunakan `localStorage`, sementara HTML awal dan atribut bahasa default adalah Indonesia.
- Homepage telah memiliki JSON-LD organisasi, tetapi schema berada di komponen bahasa yang ditukar pada client.

## Prioritas dampak

| Prioritas | Pekerjaan | Dampak |
|---|---|---|
| P0 | Detail artikel indexable | Sangat tinggi |
| P0 | URL multilingual + hreflang | Sangat tinggi |
| P1 | Canonical, noindex admin, metadata foundation | Tinggi |
| P1 | Sitemap dinamis termasuk artikel | Tinggi |
| P1 | Heading semantik | Menengah–tinggi |
| P2 | Structured data per tipe halaman | Menengah |
| P2 | Optimasi gambar/Core Web Vitals | Menengah–tinggi |
| P2 | Local SEO dan content cluster | Menengah–tinggi, bertahap |

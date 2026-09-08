# Review Portofolio — Aiyub Heriyanto
> Ditulis oleh **Kiro** · September 2026

---

## Kesan Umum

Portofolio ini punya fondasi yang kuat. Visual identity-nya konsisten — palet navy + kuning yang berani, typografi yang besar dan tegas, dan layout grid yang rapi. Untuk level mahasiswa D3 yang sedang magang, ini jauh di atas rata-rata. Terlihat jelas kamu serius membangun personal branding-mu secara digital.

---

## Yang Sudah Bagus ✅

### 1. Desain Visual
Penggunaan warna navy (`#171765`) dan kuning (`#ffdc3c`) konsisten dari header sampai footer. Tidak ada "tumpukan warna" yang mengganggu. Tone-nya terasa profesional tapi tetap berkarakter.

### 2. Hero Section
Sangat efektif. Tagline `IoT Engineering & Full Stack Web Dev.` langsung menjelaskan siapa kamu dalam satu baris. Status card "Current Position: Intern at Otorita IKN" di atas foto adalah sentuhan cerdas — langsung menunjukkan kredibilitas.

### 3. Struktur Konten
Alur 01 Profil → 02 Skill → 03 Experience → 04 Projects → 05 Contact mengikuti logika yang natural dan mudah diikuti recruiter.

### 4. Responsif
Media query di `680px` dan `1060px` sudah mencakup mobile dan tablet. Navigation links disembunyikan di mobile, dan grid berubah ke single column — ini keputusan yang benar.

### 5. Aksesibilitas Dasar
`aria-label` sudah dipakai di beberapa tempat kunci (`hero-visual`, `nav`, `profile-cards`). `alt` text pada gambar juga sudah ada. Ini detail yang sering diabaikan.

### 6. Performa Kode
JavaScript-nya ringan dan tepat sasaran — hanya scroll handler untuk header. Tidak ada dependensi eksternal yang tidak perlu.

---

## Saran Perbaikan 🔧

### 1. Navigasi Mobile Hilang Tanpa Pengganti
Di breakpoint ≤1060px, `nav-links` disembunyikan (`display: none`) tapi tidak ada hamburger menu atau alternatif navigasi. Pengguna mobile tidak bisa pindah section kecuali scroll manual.

**Solusi:** Tambahkan hamburger button sederhana yang toggle class pada nav, atau setidaknya tampilkan menu sebagai dropdown kecil.

```css
/* Contoh minimal */
.menu-toggle { display: none; }

@media (max-width: 1060px) {
  .menu-toggle { display: block; }
  .nav-links.open { display: flex; flex-direction: column; }
}
```

---

### 2. Section "Projects" Masih Tipis
Proyek ketiga ("Connected Digital Solutions") tidak punya konteks yang jelas — deskripsinya terasa seperti placeholder. Jika belum ada proyek nyata di area itu, lebih baik dihapus daripada terkesan mengisi ruang.

**Saran:** Ganti dengan proyek IoT dari mata kuliah, atau proyek personal kecil sekalipun. Screenshot, link repo GitHub, atau bahkan link demo akan sangat meningkatkan kredibilitas.

---

### 3. Tidak Ada Link ke GitHub Repository Proyek
Di kartu proyek QuraniBot dan Web Scraping tidak ada link ke kode atau demo-nya. Ini peluang besar yang terlewat — recruiter teknikal hampir pasti ingin lihat kode.

**Saran:** Tambahkan tombol atau ikon link "Lihat di GitHub" di setiap project card jika repo-nya publik.

---

### 4. Font `Inter` Tidak Di-load
Di CSS kamu mendefinisikan `font-family: Inter, ui-sans-serif, ...` tapi tidak ada `<link>` ke Google Fonts atau `@import` untuk Inter. Browser akan fallback ke `ui-sans-serif`. Hasilnya mungkin tidak konsisten antar perangkat.

**Solusi:** Tambahkan di `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
```

---

### 5. Tidak Ada `og:image` / Open Graph Meta Tags
Ketika link portofolio ini dibagikan ke LinkedIn atau WhatsApp, tidak akan ada preview gambar atau deskripsi yang menarik.

**Solusi:** Tambahkan meta tags Open Graph di `<head>`:
```html
<meta property="og:title" content="Aiyub Heriyanto | IoT Engineering & Full Stack Web Dev" />
<meta property="og:description" content="Mahasiswa D3 Teknik Komputer dengan fokus Full Stack, IoT, dan AI." />
<meta property="og:image" content="img/banner LinkedIn.png" />
<meta property="og:type" content="website" />
```

---

### 6. `section-kicker` Kuning Tidak Terlihat di Section Terang
Di section Skill dan Project, `section-kicker` (teks "02 / Skill Focus", "04 / Projects") berwarna `var(--yellow)` tapi background-nya terang (`--soft` / `#fefefe`). Kontras warnanya rendah dan mungkin tidak lulus WCAG AA.

**Saran:** Ubah warna kicker di section terang menjadi `var(--navy)` atau `var(--blue)`.

---

### 7. `scroll-margin-top` untuk Fixed Header
Karena header fixed, saat klik link navigasi seperti `#skills`, section tersebut akan tertutup sebagian oleh header.

**Solusi:** Tambahkan:
```css
section[id] {
  scroll-margin-top: 80px;
}
```

---

### 8. Tambahkan Favicon
Tidak ada `<link rel="icon">` di `<head>`. Tab browser akan menampilkan ikon default yang generik.

**Solusi:** Buat favicon sederhana (misalnya inisial "AH" atau ikon kecil) dan tambahkan:
```html
<link rel="icon" href="img/favicon.ico" type="image/x-icon" />
```

---

## Prioritas Perbaikan

| # | Item | Dampak | Kesulitan |
|---|------|--------|-----------|
| 1 | Hamburger menu mobile | Tinggi | Sedang |
| 2 | Load font Inter | Sedang | Rendah |
| 3 | Open Graph meta tags | Tinggi | Rendah |
| 4 | scroll-margin-top | Sedang | Rendah |
| 5 | Link GitHub di project cards | Tinggi | Rendah |
| 6 | Perkuat proyek ketiga atau hapus | Tinggi | Sedang |
| 7 | Kontras warna section-kicker | Sedang | Rendah |
| 8 | Favicon | Rendah | Rendah |

---

## Kesimpulan

Portofolio ini sudah layak ditampilkan ke publik dan ke recruiter. Desainnya solid, personal brand-nya jelas, dan kontennya relevan. Tiga perbaikan yang paling worth it untuk dilakukan sekarang: **hamburger menu mobile**, **Open Graph meta tags**, dan **link GitHub di proyek** — ketiganya dampaknya besar tapi tidak butuh waktu lama.

Kamu sudah di jalur yang benar. Keep building. 🚀

---

*Review ini dibuat berdasarkan pembacaan `index.html`, `styles.css`, dan `script.js` oleh Kiro.*

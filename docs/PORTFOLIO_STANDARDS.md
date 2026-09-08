# Standar Portofolio & Saran Pengembangan
> Dokumen ini ditulis oleh **Kiro** · September 2026  
> Berisi standar teknis yang berlaku saat ini dan roadmap pengembangan ke depan.

---

## Kondisi Saat Ini

| Metrik Lighthouse | Nilai |
|---|---|
| Performance | ~65 → target 85+ setelah optimasi ini |
| Accessibility | 92 |
| Best Practices | 100 |
| SEO | 100 |

---

## Standar Teknis yang Berlaku

### HTML
- Semua `<img>` **wajib** punya atribut `width`, `height`, `alt`, dan `loading="lazy"` (kecuali LCP image yang pakai `fetchpriority="high"`)
- LCP image wajib di-`preload` via `<link rel="preload" as="image">` di `<head>`
- Canonical URL wajib ada: `<link rel="canonical" href="...">`
- Open Graph dan Twitter Card wajib lengkap untuk sharing yang baik
- Script non-kritis wajib pakai `defer` untuk tidak memblokir render
- Swiper CSS di-load non-blocking dengan `media="print" onload="this.media='all'"`

### Gambar
- Format: **WebP** untuk semua gambar (hemat 60–90% dibanding PNG/JPG)
- Ukuran maksimal per file: **≤ 400KB** untuk gallery, **≤ 150KB** untuk thumbnail
- Dimensi: maksimal **1600px** di sisi terpanjang untuk foto gallery
- Foto profil / avatar: maksimal **800px**, kualitas 82–84
- Konversi menggunakan Pillow (Python) dengan `method=6` untuk kompresi optimal
- Jangan menyimpan file PNG/JPG lama setelah konversi

### CSS
- Gunakan CSS custom properties (tokens) untuk semua warna, shadow, radius, dan easing
- `content-visibility: auto` + `contain-intrinsic-size` pada semua section di bawah fold
- `will-change` hanya pada elemen yang benar-benar sedang dalam animasi — hapus setelah selesai
- `aspect-ratio` wajib pada container gambar untuk mencegah CLS
- Animasi berat (`morphBlob`, `spinRing`) harus dimatikan di mobile via `@media (max-width: 680px) { animation: none !important }`
- Tidak ada CSS duplikat atau selector yang tidak terpakai

### JavaScript
- Semua `JSON.parse` wajib dibungkus `try/catch`
- Scroll listener harus digabung dalam satu `requestAnimationFrame` throttle
- Tidak ada `removeEventListener` yang dipanggil untuk listener yang tidak dipasang
- `IntersectionObserver` di-unobserve setelah target masuk view
- Swiper: gunakan `realIndex` (bukan `activeIndex`) saat `loop: true` untuk menghindari clone issue

### Performa
- Noise texture SVG: `numOctaves` maksimal **2**, `viewBox` maksimal **128×128**
- Gallery foto besar di-kompres sebelum ditambahkan
- Animasi orbit dimatikan di mobile untuk hemat CPU/GPU

---

## Cara Menambah Konten Baru

### Menambah Slide Gallery
1. Buka `index.html`, cari section `#gallery`
2. Duplikasi satu blok `<div class="swiper-slide pano-slide">` yang sudah ada
3. Ganti `src`, `data-title`, `data-desc`, `alt`, `width`, `height`
4. Konversi foto ke WebP dulu sebelum ditambahkan (lihat standar gambar di atas)
5. CSS dan JS otomatis menyesuaikan — tidak perlu diubah

### Menambah Proyek Baru
1. Buka `index.html`, cari section `#projects`
2. Duplikasi `<article class="project-card">` yang sudah ada
3. Isi `src`, `alt`, `width`, `height` pada gambar thumbnail
4. Update `project-type`, `h3`, deskripsi, dan `tag-row`
5. Ganti `href` pada `proj-link` ke URL repository GitHub yang sesuai

### Update Experience / Sertifikat
Portofolio tidak mengambil data secara real-time dari LinkedIn (karena LinkedIn API tidak tersedia publik). Update manual dilakukan di `index.html` section `#experience`. Untuk melihat data LinkedIn terbaru, tersedia shortcut link di section Contact yang mengarah langsung ke setiap tab profil LinkedIn.

---

## Saran Pengembangan — Prioritas Tinggi

### 1. Lazy Load Gambar Gallery Lebih Agresif
Saat ini semua slide gallery di-render di DOM saat halaman dibuka. Untuk gallery besar (>10 foto), pertimbangkan virtual scrolling atau hanya render slide yang terlihat.

```js
// Ide: gunakan Swiper's lazy loading bawaan
const swiper = new Swiper('.pano-swiper', {
  lazy: { loadPrevNext: true, loadPrevNextAmount: 1 },
  // ...
});
```

### 2. Service Worker / PWA
Tambahkan Service Worker sederhana untuk cache aset statis (CSS, JS, gambar) agar portofolio bisa diakses offline dan load lebih cepat pada kunjungan kedua.

```
docs/
  sw.js          ← Service Worker
  manifest.json  ← PWA manifest
```

### 3. Animasi Typing yang Bisa Di-skip
Tambahkan tombol "Skip" atau deteksi klik/keypress untuk langsung menampilkan teks penuh tanpa menunggu animasi typing selesai.

### 4. Dark/Light Mode Toggle
Warna saat ini sudah menggunakan CSS custom properties — tinggal menambahkan set token alternatif dan toggle `data-theme` pada `<html>`.

```css
[data-theme="light"] {
  --ink: #0d0f1f;
  --paper: #ffffff;
  /* ... */
}
[data-theme="dark"] {
  --ink: #f0f0ff;
  --paper: #0f1050;
  /* ... */
}
```

### 5. Blog / Tulisan Teknis
Tambahkan section atau halaman terpisah untuk artikel atau tulisan teknis. Ini sangat efektif untuk SEO dan menunjukkan depth pemahaman teknis kepada recruiter.

### 6. CV / Resume Download
Tambahkan tombol "Unduh CV" di hero atau contact section yang langsung men-download file PDF.

```html
<a class="button primary" href="docs/cv-aiyub-heriyanto.pdf" download>
  Unduh CV
</a>
```

---

## Saran Pengembangan — Prioritas Sedang

### 7. Integrasi GitHub Stats
Tampilkan statistik GitHub (total repo, kontribusi, bahasa) menggunakan [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) sebagai embed image atau via GitHub API.

### 8. Project Filter / Search
Jika jumlah proyek bertambah, tambahkan filter berdasarkan teknologi (Python, IoT, AI, Web) menggunakan JavaScript murni tanpa library tambahan.

### 9. Testimonial / Rekomendasi
Tambahkan section untuk menampilkan kutipan rekomendasi dari pembimbing atau rekan kerja. Ini meningkatkan kepercayaan recruiter secara signifikan.

### 10. Analytics
Pasang [Umami](https://umami.is/) (gratis, privacy-friendly) atau Google Analytics untuk mengetahui berapa pengunjung, dari mana, dan section mana yang paling banyak dilihat.

---

## Saran Pengembangan — Prioritas Rendah

### 11. Migrasi ke Static Site Generator
Jika konten terus bertambah, pertimbangkan migrasi ke [Astro](https://astro.build/) atau [Next.js](https://nextjs.org/). Manfaat: component-based, mudah maintain, built-in optimization.

### 12. Internasionalisasi (i18n)
Tambahkan versi bahasa Inggris untuk menjangkau recruiter internasional. Implementasi sederhana bisa menggunakan `data-i18n` attribute dan JS switch language.

### 13. Microdata / Schema.org
Tambahkan structured data `Person` schema untuk meningkatkan tampilan di hasil pencarian Google.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aiyub Heriyanto",
  "jobTitle": "Computer Engineering Student",
  "url": "https://aiyub150.github.io/Portofolio/"
}
</script>
```

---

## Checklist Sebelum Push ke GitHub

- [ ] Semua gambar baru dalam format `.webp` dan ukuran ≤ 400KB
- [ ] Semua `<img>` baru punya `width`, `height`, `alt`, `loading="lazy"`
- [ ] Tidak ada file `.png`, `.jpg`, `.jpeg` baru di folder `img/`
- [ ] Tidak ada file Python (`.py`) yang ikut ter-commit
- [ ] Jalankan Lighthouse dan pastikan Performance ≥ 80
- [ ] Test di mobile (Chrome DevTools → 400px width)
- [ ] Cek console browser — tidak ada error

---

*Dokumen ini dibuat dan dikelola oleh Kiro. Update terakhir: September 2026.*

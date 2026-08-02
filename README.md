# Taekwondo Garuda Club — Website Gatsby JS

Website resmi untuk dojang Taekwondo Garuda Club: statis, cepat, SEO-ready, dan
dikeraskan (hardened) terhadap kerentanan web yang umum.

## 1. Menjalankan di komputer lokal

Butuh Node.js 18+ dan npm.

```bash
npm install
npm run develop
```

Buka `http://localhost:8000`. Perubahan kode akan otomatis ter-reload (hot reload).

Untuk build produksi + cek hasilnya secara lokal:

```bash
npm run build
npm run serve
```

## 2. Struktur proyek

```
src/
  components/   → Header, Footer, Layout, SEO, RevealOnScroll, BeltPath
  pages/        → satu file = satu URL (index.js → "/", kontak.js → "/kontak/")
  styles/       → global.css (design tokens: warna, tipografi, spacing)
  images/       → taruh foto asli di sini (lihat bagian 5)
static/
  _headers      → header keamanan HTTP (dibaca otomatis oleh Netlify)
gatsby-config.js → metadata situs, plugin SEO/sitemap/robots
```

## 3. Sebelum deploy ke production — checklist wajib

1. Ganti `siteUrl` di `gatsby-config.js` dengan domain asli.
2. Ganti nomor telepon, email, alamat, dan tautan media sosial di
   `gatsby-config.js` (`siteMetadata`).
3. Tambahkan foto asli (lihat bagian 5) dan buat `src/images/icon.png` (512×512)
   untuk ikon PWA, lalu aktifkan kembali baris `icon:` di `gatsby-plugin-manifest`.
4. Buat gambar `static/og-cover.jpg` (1200×630) untuk pratinjau saat link dibagikan
   di WhatsApp/Facebook/Twitter.
5. Jalankan `npm audit` dan perbarui dependency yang punya kerentanan.

## 4. SEO yang sudah diterapkan

- **Meta tag lengkap per halaman** lewat komponen `<Seo />`: title, description,
  canonical URL, Open Graph, Twitter Card.
- **Data terstruktur JSON-LD** (`SportsActivityLocation`) agar Google bisa
  menampilkan info dojang (alamat, telepon) langsung di hasil pencarian.
- **Sitemap otomatis** (`gatsby-plugin-sitemap`) dan **robots.txt otomatis**
  (`gatsby-plugin-robots-txt`) — dibuat ulang setiap `npm run build`.
- **HTML semantik**: satu `<h1>` per halaman, struktur heading berurutan, tabel
  jadwal memakai `<th scope="col">`, tombol punya `aria-label`/`aria-pressed`.
- **Performa**: Gatsby me-render halaman jadi HTML statis (pre-rendered) dan
  hanya memuat JavaScript yang dibutuhkan tiap halaman — penting karena
  kecepatan load adalah faktor ranking Google.
- **Bahasa halaman** diset `lang="id"` untuk relevansi pencarian lokal Indonesia.

Setelah live, daftarkan situs di **Google Search Console** dan submit
`https://domain-anda.id/sitemap-index.xml`.

## 5. Menambahkan foto asli

1. Taruh file gambar di `src/images/`.
2. Di komponen/halaman, import dan pakai `<GatsbyImage>` atau `<StaticImage>`
   dari `gatsby-plugin-image` — Gatsby otomatis membuat versi WebP,
   lazy-loading, dan ukuran responsif tanpa kode tambahan. Contoh:

   ```jsx
   import { StaticImage } from "gatsby-plugin-image"
   <StaticImage src="../images/hero-latihan.jpg" alt="Latihan Taekwondo Garuda Club" />
   ```

3. Ganti tile placeholder di `src/pages/galeri.js` dengan gambar asli dengan cara yang sama.

## 6. Keamanan — apa yang sudah diterapkan dan mengapa

Situs statis (hasil `gatsby build`) sudah jauh lebih sulit diretas dibanding
situs dengan database + panel admin (mis. WordPress), karena tidak ada
server-side code, database, atau login admin yang bisa dieksploitasi saat
runtime. Tambahan yang diterapkan di proyek ini:

| Perlindungan | Implementasi | Manfaat |
|---|---|---|
| Header keamanan HTTP | `static/_headers` | Mencegah clickjacking (`X-Frame-Options`), MIME-sniffing (`X-Content-Type-Options`), memaksa HTTPS (`Strict-Transport-Security`) |
| Content-Security-Policy | `static/_headers` | Membatasi sumber script/style yang boleh dimuat browser — mempersempit celah XSS |
| Anti-spam formulir | Honeypot field (`bot-field`) di `kontak.js` | Menjebak bot spam otomatis tanpa mengganggu pengguna asli |
| Validasi ganda | Client-side di `kontak.js` **+ wajib divalidasi ulang di server/Netlify Forms** | Validasi di browser hanya untuk UX; validasi sebenarnya harus di server karena input dari klien selalu bisa dipalsukan |
| Tanpa secret di kode | `.env.example` + `.gitignore` | API key/secret tidak pernah ikut ter-commit ke Git atau ter-bundle ke JavaScript publik |
| Dependency minimal | `package.json` hanya memuat plugin resmi Gatsby | Mengurangi permukaan serangan dari paket npm pihak ketiga yang jarang di-maintain |

### Rekomendasi tambahan saat deploy (di luar kode)

- **Hosting**: gunakan Netlify, Vercel, atau Cloudflare Pages — HTTPS otomatis,
  CDN, dan proteksi DDoS dasar sudah bawaan platform.
- **Autentikasi akun hosting & domain**: aktifkan 2FA di akun Netlify/Vercel/
  registrar domain — ini sering jadi titik lemah nomor satu, bukan kodenya.
- **Update rutin**: jalankan `npm audit fix` dan perbarui Gatsby setiap
  beberapa bulan agar mendapat patch keamanan terbaru.
- **Jika nanti menambah CMS** (Netlify CMS/Contentful/dsb.), pastikan akun
  editor pakai password kuat + 2FA, dan API key CMS jangan pernah ditaruh di
  kode client-side.
- **Formulir produksi**: aktifkan reCAPTCHA/Cloudflare Turnstile di Netlify
  Forms (Site settings → Forms → Spam filters) sebagai lapisan tambahan di
  atas honeypot yang sudah ada.
- **Rate limiting**: jika form dipindah ke serverless function sendiri,
  tambahkan rate limiting per IP agar tidak bisa dibanjiri submission.

> Tidak ada situs yang "100% tidak bisa diretas" — tujuan langkah-langkah di
> atas adalah mengurangi permukaan serangan sebanyak mungkin dan mengikuti
> praktik terbaik industri.

## 7. Deploy

**Netlify (disarankan, karena `_headers` dan Netlify Forms otomatis aktif):**
1. Push proyek ini ke GitHub/GitLab.
2. Di Netlify: "Add new site" → hubungkan repo.
3. Build command: `npm run build` — Publish directory: `public`.
4. Deploy.

**Vercel / Cloudflare Pages:** proses serupa, tapi header keamanan di
`static/_headers` perlu dipindahkan ke `vercel.json` (`headers` field) atau
`_headers` versi Cloudflare Pages (formatnya sama), dan form kontak perlu
diarahkan ke layanan lain (mis. Web3Forms, Formspree) karena Netlify Forms
khusus untuk hosting Netlify.

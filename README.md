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
  data/         → testimoni.js: cerita bawaan (seed) untuk beranda & /testimoni/
  styles/       → global.css (design tokens: warna, tipografi, spacing)
  images/       → taruh foto asli di sini (lihat bagian 5)
netlify/
  functions/    → testimoni.js: endpoint kirim & baca testimoni (lihat bagian 2a)
static/
  _headers      → header keamanan HTTP (dibaca otomatis oleh Netlify)
gatsby-config.js → metadata situs, plugin SEO/sitemap/robots
netlify.toml     → konfigurasi build & functions untuk Netlify
```

### 2a. Fitur testimoni "isi sendiri, langsung tayang" (`/testimoni/`)

Halaman `/testimoni/` (sengaja tidak ada di menu utama, hanya ditautkan dari
bagian testimoni di beranda) punya formulir yang bisa diisi siapa saja, dan
ceritanya **langsung tayang tanpa peninjauan admin**. Ini butuh backend
ringan, karena situs ini sendiri statis:

- **Penyimpanan**: [Netlify Blobs](https://docs.netlify.com/blobs/overview/) —
  fitur bawaan Netlify, otomatis aktif saat di-deploy ke Netlify, **tanpa**
  perlu bikin akun/API key layanan lain.
- **Endpoint**: `netlify/functions/testimoni.js` — `GET` mengambil daftar
  testimoni, `POST` memvalidasi lalu menyimpan testimoni baru dan langsung
  mengembalikannya (auto-publish).
- **Pengaman terhadap spam** (karena tidak ada peninjauan manusia sama
  sekali): honeypot anti-bot, validasi panjang teks, dan rate limit 1
  kiriman per IP per 30 detik. Ini bukan jaminan 100% bebas spam — kalau ke
  depan butuh lebih ketat, tambahkan reCAPTCHA/Turnstile di form dan
  verifikasi tokennya di function.
- **Wajib jalankan lewat `netlify dev`, bukan `npm run develop` biasa**, agar
  endpoint `/api/testimoni` aktif secara lokal:
  ```bash
  npm install -g netlify-cli   # sekali saja
  netlify dev
  ```
  Kalau dijalankan dengan `npm run develop` biasa, halaman `/testimoni/` tetap
  tampil (jatuh ke cerita bawaan di `src/data/testimoni.js`) tapi tombol kirim
  cerita tidak akan berfungsi.
- **Mengedit 3 cerita pilihan di beranda**: edit array di `src/data/testimoni.js`
  seperti biasa lalu commit — ini terpisah dari cerita kiriman pengguna.

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

**Netlify (wajib untuk fitur ini, bukan sekadar disarankan) —** `_headers`,
Netlify Forms (form kontak), dan Netlify Functions + Netlify Blobs (fitur
kirim testimoni auto-publish di bagian 2a) semuanya khusus Netlify:
1. Push proyek ini ke GitHub/GitLab.
2. Di Netlify: "Add new site" → hubungkan repo. `netlify.toml` di root sudah
   berisi konfigurasi build & lokasi functions, jadi biasanya tidak perlu
   diatur manual.
3. Build command: `npm run build` — Publish directory: `public` — Functions
   directory: `netlify/functions` (otomatis terbaca dari `netlify.toml`).
4. Deploy. Netlify Blobs aktif otomatis, tidak perlu setup database/API key
   tambahan apa pun.

**Vercel / Cloudflare Pages:** bisa dipakai untuk situs utamanya, tapi
`_headers` perlu dipindahkan ke format masing-masing platform, form kontak
perlu diarahkan ke layanan lain (mis. Web3Forms, Formspree), dan fitur
testimoni auto-publish di bagian 2a perlu ditulis ulang memakai penyimpanan
serverless platform tersebut (mis. Vercel KV / Cloudflare KV) karena Netlify
Blobs khusus Netlify.

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import BeltPath from "../components/beltPath"
import * as styles from "./index.module.css"

const STATS = [
  { angka: "46+", label: "Tahun membina atlet" },
  { angka: "1966", label: "Murid aktif" },
  { angka: "13", label: "Pelatih Aktif" },
  { angka: "64", label: "Cabang dojang" },
]

const PROGRAMS = [
  {
    judul: "Level 0 - Kelas Have Fun",
    deskripsi: "Tahapan bersenang2, ananda berlatih sambil bermain (1-2x pertemuan). Target : ananda senang dan menyukai berlatih taekwondo Tidak ada seleksi.",
  },
  {
    judul: "Level 1 - Kelas Basic",
    deskripsi: "Tahapan pengenalan tendangan, pukulan dan tangkisan dasar menggunakan kicking target. Target : Tendangan tinggi ke arah kepala, dan memiliki power impact tendangan ke arah perut agar saat memakai body protector di level 2 tendangan tidak rendah karena terganjal body protector. Target : Memiliki keberanian untuk fighting di kyorugi, tendangan sudah cepat, benar dan tinggi Butuh seleksi dari sabeum dan persetujuan mama (seleksi 1 bulan sekali untuk ke level 2).",
  },
  {
    judul: "Level 2 - Kelas Prestasi Reguler",
    deskripsi: "Pembiasaan memakai alat tanding seperti body protector, pelindung tangan, kaki dan kemaluan. Pembiasaan fighting. Target : untuk kyorugi siap teknik dan mental untuk mengikuti kejuaraan. Latihan minimal 2x (seleksi 2-3 bulan sekali untuk ke level 3)",
  },
  {
    judul: "Level 3 - Kelas Intermediate kategori pemula",
    deskripsi: "Persiapan untuk mengikuti kejuaraan kategori prestasi, penambahan teknik, latih fisik dan latih mental. Target : Kyorugi Mengikuti kejuaraan kategori prestasi. (seleksi via kejauraan2 yang diikuti)",
  },
  {
    judul: "Level 4 - Kelas Intermediate kategori Semi Prestasi",
    deskripsi: "persiapan mengikuti kejuaraan kategori prestasi di luar kota, persiapan seleksi popda dan kejuaraan kedinasan lainnya. Target : siap mengikuti kejuaraan luar kota dan seleksi kedinasan.",
  },
  {
    judul: "Level 5 - Kelas Expert Kategori Prestasi",
    deskripsi: "Pembinaan atlet tingkat lanjut untuk menghadapi kejuaraan bergengsi tingkat daerah, provinsi, nasional dan internasional hingga seleksi atlet berprestasi. Fokus pada peningkatan teknik, taktik pertandingan, fisik, mental juara, serta konsistensi performa agar mampu bersaing di tingkat yang lebih tinggi. Target: Siap menjadi atlet berprestasi, mengikuti kejuaraan tingkat provinsi/nasional/internasional, lolos seleksi atlet atau kedinasan, serta mampu meraih prestasi secara konsisten.",
  },
]

const TESTIMONI = [
  {
    kutipan:
      "Anak saya yang dulu pemalu sekarang berani tampil di depan kelas. Pelatihnya sabar tapi tegas.",
    nama: "Ibu Ratna",
    peran: "Orang tua murid Little Tigers",
  },
  {
    kutipan:
      "Program kompetisinya serius. Dalam setahun saya naik dari sabuk biru ke merah dan lolos Porprov.",
    nama: "Dimas A.",
    peran: "Atlet Kelas Kompetisi",
  },
  {
    kutipan:
      "Jadwalnya fleksibel untuk pekerja kantoran dan tetap bikin keringetan. Worth it.",
    nama: "Sarah W.",
    peran: "Kelas Dewasa & Kebugaran",
  },
]

function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Dojang Taekwondo Resmi di Tangerang Raya"
        description="Taekwondo Garuda Club membina anak, remaja, dan dewasa dengan kurikulum resmi Kukkiwon, pelatih bersertifikat, dan jalur kompetisi. Coba kelas pertama gratis."
        pathname="/"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroWing} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrowLight}>Dojang Resmi · Terafiliasi Kukkiwon</p>
          <h1 className={styles.heroTitle}>
            Taekwondo
            <br />
            Garuda<span className={styles.heroAccent}>Club</span>
          </h1>
          <p className={styles.heroLead}>
            Taekwondo Garuda Club melatih disiplin, keberanian, dan prestasi
            dari langkah pertama sabuk putih hingga podium kejuaraan nasional dan internasional.
          </p>
          <div className={styles.heroActions}>
            <Link to="/kontak/#daftar" className="btn btn-primary">
              Coba Kelas Trial
            </Link>
            <Link to="/program-latihan/" className="btn btn-ghost">
              Lihat Program
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {STATS.map((s, i) => (
            <RevealOnScroll as="div" key={s.label} delay={i * 80} className={styles.statCard}>
              <span className={styles.statNumber}>{s.angka}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container">
        <RevealOnScroll>
          <p className="eyebrow">Program Latihan</p>
          <h2 className={styles.sectionTitle}>Kelas untuk Setiap Usia &amp; Tujuan</h2>
        </RevealOnScroll>
        <div className={styles.programGrid}>
          {PROGRAMS.map((p, i) => (
            <RevealOnScroll as="article" key={p.judul} delay={i * 90} className={styles.programCard}>
              <span className={styles.programIndex}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.judul}</h3>
              <p>{p.deskripsi}</p>
            </RevealOnScroll>
          ))}
        </div>
        <Link to="/program-latihan/" className={styles.programLink}>
          Selengkapnya tentang program →
        </Link>
      </section>

      {/* BELT PATH */}
      <section className={styles.beltSection}>
        <div className="container">
          <RevealOnScroll>
            <p className="eyebrow">Jalur Tingkatan</p>
            <h2 className={styles.sectionTitle}>Dari Sabuk Putih ke Sabuk Hitam</h2>
            <p className={styles.beltLead}>
              Setiap tingkatan sabuk adalah tonggak nyata: ujian teknik, disiplin,
              dan kesiapan mental yang diuji langsung oleh pelatih bersertifikat.
            </p>
          </RevealOnScroll>
          <BeltPath />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container">
        <RevealOnScroll>
          <p className="eyebrow">Kata Mereka</p>
          <h2 className={styles.sectionTitle}>Cerita dari Keluarga Garuda Club</h2>
        </RevealOnScroll>
        <div className={styles.testiGrid}>
          {TESTIMONI.map((t, i) => (
            <RevealOnScroll as="blockquote" key={t.nama} delay={i * 100} className={styles.testiCard}>
              <p>&ldquo;{t.kutipan}&rdquo;</p>
              <footer>
                <strong>{t.nama}</strong>
                <span>{t.peran}</span>
              </footer>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Siap Melangkah ke Matras Pertama?</h2>
            <p>Kelas percobaan gratis, tanpa komitmen jangka panjang.</p>
          </div>
          <Link to="/kontak/#daftar" className="btn btn-primary">
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

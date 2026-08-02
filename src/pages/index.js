<<<<<<< HEAD
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import BeltPath from "../components/beltPath"
import * as styles from "./index.module.css"

const STATS = [
  { angka: "12+", label: "Tahun membina atlet" },
  { angka: "480", label: "Anggota aktif" },
  { angka: "35", label: "Medali kompetisi 2024" },
  { angka: "6", label: "Cabang dojang" },
]

const PROGRAMS = [
  {
    judul: "Little Tigers (5–7 th)",
    deskripsi: "Motorik dasar, disiplin, dan keberanian lewat permainan bertema Taekwondo.",
  },
  {
    judul: "Junior Athlete (8–14 th)",
    deskripsi: "Teknik dasar hingga menengah, kesiapan sabuk resmi Kukkiwon, dan sparring terpandu.",
  },
  {
    judul: "Dewasa & Kebugaran",
    deskripsi: "Kombinasi kardio tinggi, pertahanan diri praktis, dan pembentukan sabuk lanjutan.",
  },
  {
    judul: "Kelas Kompetisi",
    deskripsi: "Program intensif poomsae & kyorugi untuk atlet yang menuju kejuaraan daerah dan nasional.",
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
        title="Dojang Taekwondo Resmi di Jakarta"
        description="Taekwondo Garuda Club membina anak, remaja, dan dewasa dengan kurikulum resmi Kukkiwon, pelatih bersertifikat, dan jalur kompetisi. Coba kelas pertama gratis."
        pathname="/"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroWing} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrowLight}>Dojang Resmi · Terafiliasi Kukkiwon</p>
          <h1 className={styles.heroTitle}>
            Setiap Tendangan
            <br />
            Membentuk <span className={styles.heroAccent}>Karakter.</span>
          </h1>
          <p className={styles.heroLead}>
            Taekwondo Garuda Club melatih disiplin, keberanian, dan prestasi —
            dari langkah pertama sabuk putih hingga podium kejuaraan nasional.
          </p>
          <div className={styles.heroActions}>
            <Link to="/kontak/#daftar" className="btn btn-primary">
              Coba Kelas Gratis
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
=======
import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="Home"
        description="Ini Adalah Website Resmi Taekwondo Garuda Club."
        lang="id"
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)
>>>>>>> 5f9371aa013a2f6cb3a2bf501153b2ab3db907d9

export default IndexPage

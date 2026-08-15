import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import BeltPath from "../components/beltPath"
import * as styles from "./program-latihan.module.css"

const PROGRAMS = [
  {
    judul: "Little Tigers",
    usia: "5–7 tahun",
    durasi: "45 menit / sesi",
    fokus: [
      "Koordinasi motorik dan keseimbangan dasar",
      "Pengenalan sikap hormat dan disiplin kelas",
      "Permainan bertema Taekwondo untuk membangun rasa percaya diri",
    ],
  },
  {
    judul: "Junior Athlete",
    usia: "8–14 tahun",
    durasi: "60 menit / sesi",
    fokus: [
      "Teknik dasar hingga menengah sesuai kurikulum Kukkiwon",
      "Persiapan ujian kenaikan sabuk resmi",
      "Sparring terpandu dengan pengawasan pelatih bersertifikat",
    ],
  },
  {
    judul: "Dewasa & Kebugaran",
    usia: "15 tahun ke atas",
    durasi: "75 menit / sesi",
    fokus: [
      "Latihan kardio intensitas tinggi berbasis gerakan Taekwondo",
      "Teknik pertahanan diri praktis untuk situasi sehari-hari",
      "Jalur sabuk lanjutan bagi yang ingin serius berlatih",
    ],
  },
  {
    judul: "Kelas Kompetisi",
    usia: "Seleksi internal",
    durasi: "90 menit / sesi, 4x seminggu",
    fokus: [
      "Program intensif poomsae (jurus) dan kyorugi (sparring)",
      "Pembinaan fisik: kekuatan, kelincahan, dan daya tahan atlet",
      "Pendampingan menuju kejuaraan daerah, nasional, hingga internasional",
    ],
  },
]

function ProgramLatihanPage() {
  return (
    <Layout>
      <Seo
        title="Program Latihan"
        description="Empat jalur program Taekwondo Garuda Club: Little Tigers, Junior Athlete, Dewasa & Kebugaran, dan Kelas Kompetisi — sesuai usia dan tujuan latihan."
        pathname="/program-latihan/"
      />

      <section className={styles.header}>
        <div className="container">
          <p className="eyebrow">Program Latihan</p>
          <h1 className={styles.title}>Jalur Latihan Sesuai Usia &amp; Tujuan</h1>
          <p className={styles.lead}>
            Setiap program dirancang bertahap — dari pengenalan gerak dasar
            hingga persiapan kompetisi tingkat nasional.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.grid}>
          {PROGRAMS.map((p, i) => (
            <RevealOnScroll as="article" key={p.judul} delay={i * 90} className={styles.card}>
              <div className={styles.cardHead}>
                <h2>{p.judul}</h2>
                <span className={styles.badge}>{p.usia}</span>
              </div>
              <p className={styles.duration}>{p.durasi}</p>
              <ul className={styles.focusList}>
                {p.fokus.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className={styles.beltSection}>
        <div className="container">
          <RevealOnScroll>
            <p className="eyebrow">Jalur Tingkatan</p>
            <h2 className={styles.h2}>Sebelas Langkah Menuju Sabuk Hitam</h2>
          </RevealOnScroll>
          <BeltPath />
        </div>
      </section>

      <section className="container">
        <RevealOnScroll className={styles.ctaBand}>
          <h2 className={styles.h2}>Belum Yakin Program Mana yang Cocok?</h2>
          <p>Tim kami akan membantu menilai level dan tujuan Anda saat kelas percobaan.</p>
          <Link to="/kontak/#daftar" className="btn btn-primary">
            Konsultasi Gratis
          </Link>
        </RevealOnScroll>
      </section>
    </Layout>
  )
}

export default ProgramLatihanPage

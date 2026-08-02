import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import * as styles from "./pelatih.module.css"

const PELATIH = [
  {
    nama: "Sabum Andre Wijaya",
    sabuk: "Sabuk Hitam Dan V",
    spesialisasi: "Kepala Pelatih · Kelas Kompetisi",
    bio: "Mantan atlet nasional dengan pengalaman melatih lebih dari 40 medalis daerah dan nasional sejak 2014.",
  },
  {
    nama: "Sabum Nia Kusuma",
    sabuk: "Sabuk Hitam Dan IV",
    spesialisasi: "Junior Athlete & Ujian Sabuk",
    bio: "Fokus pada pembinaan teknik dasar yang kuat dan kesiapan mental murid menghadapi ujian kenaikan sabuk.",
  },
  {
    nama: "Sabum Fajar Ramadhan",
    sabuk: "Sabuk Hitam Dan III",
    spesialisasi: "Little Tigers",
    bio: "Spesialis pendekatan bermain-sambil-belajar untuk murid usia dini, bersertifikat instruktur anak Kukkiwon.",
  },
  {
    nama: "Sabum Clara Tanudjaja",
    sabuk: "Sabuk Hitam Dan III",
    spesialisasi: "Dewasa & Kebugaran, Pertahanan Diri",
    bio: "Melatih kelas dewasa dengan pendekatan kebugaran fungsional dan teknik pertahanan diri praktis.",
  },
]

function PelatihPage() {
  return (
    <Layout>
      <Seo
        title="Pelatih Kami"
        description="Kenali tim pelatih bersertifikat Taekwondo Garuda Club — dari kepala pelatih atlet nasional hingga spesialis kelas anak usia dini."
        pathname="/pelatih/"
      />

      <section className={styles.header}>
        <div className="container">
          <p className="eyebrow">Tim Pelatih</p>
          <h1 className={styles.title}>Dibimbing Sabuk Hitam Bersertifikat</h1>
          <p className={styles.lead}>
            Setiap pelatih kami memegang sertifikasi Dan resmi dan aktif
            mengikuti pelatihan penyegaran teknik setiap tahun.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.grid}>
          {PELATIH.map((p, i) => (
            <RevealOnScroll as="article" key={p.nama} delay={i * 90} className={styles.card}>
              <div className={styles.avatar} aria-hidden="true">
                {p.nama
                  .split(" ")
                  .slice(-2)
                  .map(w => w[0])
                  .join("")}
              </div>
              <h2>{p.nama}</h2>
              <p className={styles.rank}>{p.sabuk}</p>
              <p className={styles.spec}>{p.spesialisasi}</p>
              <p className={styles.bio}>{p.bio}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default PelatihPage

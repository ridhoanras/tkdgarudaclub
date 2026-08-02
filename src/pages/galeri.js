import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import * as styles from "./galeri.module.css"

const FOTO = [
  { id: 1, kategori: "Kompetisi", judul: "Final Kyorugi Porprov 2024", tinggi: "tall" },
  { id: 2, kategori: "Latihan", judul: "Sesi Poomsae Junior Athlete", tinggi: "short" },
  { id: 3, kategori: "Ujian Sabuk", judul: "Ujian Kenaikan Sabuk Kuning", tinggi: "short" },
  { id: 4, kategori: "Komunitas", judul: "Family Day Garuda Club 2024", tinggi: "tall" },
  { id: 5, kategori: "Kompetisi", judul: "Tim Kompetisi di Kejurda", tinggi: "short" },
  { id: 6, kategori: "Latihan", judul: "Kelas Little Tigers", tinggi: "tall" },
  { id: 7, kategori: "Ujian Sabuk", judul: "Ujian Sabuk Hitam Dan I", tinggi: "short" },
  { id: 8, kategori: "Komunitas", judul: "Buka Puasa Bersama Anggota", tinggi: "short" },
]

const KATEGORI = ["Semua", "Kompetisi", "Latihan", "Ujian Sabuk", "Komunitas"]

function GaleriPage() {
  const [filter, setFilter] = useState("Semua")
  const tampil = filter === "Semua" ? FOTO : FOTO.filter(f => f.kategori === filter)

  return (
    <Layout>
      <Seo
        title="Galeri"
        description="Momen kompetisi, ujian sabuk, dan kegiatan komunitas Taekwondo Garuda Club dalam satu galeri."
        pathname="/galeri/"
      />

      <section className={styles.header}>
        <div className="container">
          <p className="eyebrow">Galeri</p>
          <h1 className={styles.title}>Momen di Matras &amp; Podium</h1>
          <p className={styles.lead}>
            Sebagian cerita dari latihan harian, ujian sabuk, dan kompetisi anggota Garuda Club.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.filters} role="group" aria-label="Filter kategori galeri">
          {KATEGORI.map(k => (
            <button
              key={k}
              type="button"
              className={`${styles.filterBtn} ${filter === k ? styles.filterActive : ""}`}
              onClick={() => setFilter(k)}
              aria-pressed={filter === k}
            >
              {k}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {tampil.map((f, i) => (
            <RevealOnScroll
              as="figure"
              key={f.id}
              delay={(i % 4) * 80}
              className={`${styles.tile} ${f.tinggi === "tall" ? styles.tall : ""}`}
            >
              <span className={styles.tileTag}>{f.kategori}</span>
              <figcaption>{f.judul}</figcaption>
            </RevealOnScroll>
          ))}
        </div>

        <p className={styles.note}>
          Galeri ini memakai placeholder bergaya — ganti dengan foto asli lewat{" "}
          <code>gatsby-plugin-image</code> di folder <code>src/images</code> sebelum rilis.
        </p>
      </section>
    </Layout>
  )
}

export default GaleriPage

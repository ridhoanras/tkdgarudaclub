import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import * as styles from "./tentang-kami.module.css"

const NILAI = [
  { judul: "Kesopanan", deskripsi: "Menghormati pelatih, sesama murid, dan diri sendiri di dalam maupun luar matras." },
  { judul: "Integritas", deskripsi: "Jujur pada kemampuan sendiri — kenaikan sabuk diperoleh, bukan diberi." },
  { judul: "Ketekunan", deskripsi: "Kemajuan datang dari latihan yang konsisten, bukan bakat semata." },
  { judul: "Pengendalian Diri", deskripsi: "Kekuatan fisik diimbangi kendali emosi dan tindakan." },
  { judul: "Semangat Pantang Menyerah", deskripsi: "Bangkit setelah jatuh adalah inti dari setiap sabuk yang diraih." },
]

function TentangKamiPage() {
  return (
    <Layout>
      <Seo
        title="Tentang Kami"
        description="Kenali sejarah, visi-misi, dan lima nilai inti Taekwondo Garuda Club — dojang yang membentuk disiplin dan prestasi sejak 2012."
        pathname="/tentang-kami/"
      />

      <section className={styles.header}>
        <div className="container">
          <p className="eyebrow">Tentang Kami</p>
          <h1 className={styles.title}>Dibangun di Atas Disiplin, Tumbuh Lewat Prestasi</h1>
          <p className={styles.lead}>
            Sejak 2012, Taekwondo Garuda Club berkomitmen mencetak generasi yang
            kuat secara fisik dan mental — mengikuti kurikulum resmi Kukkiwon
            dengan pendekatan yang hangat untuk semua usia.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.storyGrid}>
          <RevealOnScroll>
            <h2 className={styles.h2}>Kisah Kami</h2>
            <p>
              Garuda Club berawal dari satu ruang latihan kecil di Jakarta
              Selatan dengan 15 murid pertama. Nama "Garuda" dipilih untuk
              mewakili semangat yang kami tanamkan pada setiap murid: berani
              terbang tinggi, namun tetap berpijak pada akar disiplin dan
              nilai kebangsaan.
            </p>
            <p>
              Kini, dengan enam cabang dan ratusan anggota aktif, filosofi itu
              tidak berubah — setiap murid, dari usia 5 tahun hingga dewasa,
              dilatih dengan standar teknik yang sama dan perhatian personal
              yang sama.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className={styles.visionCard}>
              <h3>Visi</h3>
              <p>Menjadi dojang rujukan yang mencetak atlet dan pribadi berkarakter di Indonesia.</p>
            </div>
            <div className={styles.visionCard}>
              <h3>Misi</h3>
              <p>Melatih teknik Taekwondo yang benar, membina karakter lewat lima nilai inti, dan membuka jalur prestasi kompetitif bagi setiap murid yang serius.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <RevealOnScroll>
            <p className="eyebrow">Lima Nilai Inti</p>
            <h2 className={styles.h2}>Yang Kami Tanamkan di Setiap Sesi</h2>
          </RevealOnScroll>
          <ol className={styles.valuesList}>
            {NILAI.map((n, i) => (
              <RevealOnScroll as="li" key={n.judul} delay={i * 80} className={styles.valueItem}>
                <span className={styles.valueIndex}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{n.judul}</h3>
                  <p>{n.deskripsi}</p>
                </div>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  )
}

export default TentangKamiPage

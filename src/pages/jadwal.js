import React, { useState, useMemo } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import * as styles from "./jadwal.module.css"

const JADWAL = [
  { hari: "Senin", jam: "16.00 – 16.45", kelas: "Little Tigers", cabang: "Jakarta Selatan" },
  { hari: "Senin", jam: "17.00 – 18.00", kelas: "Junior Athlete", cabang: "Jakarta Selatan" },
  { hari: "Senin", jam: "19.00 – 20.15", kelas: "Dewasa & Kebugaran", cabang: "Jakarta Selatan" },
  { hari: "Selasa", jam: "16.00 – 17.30", kelas: "Kelas Kompetisi", cabang: "Jakarta Selatan" },
  { hari: "Rabu", jam: "16.00 – 16.45", kelas: "Little Tigers", cabang: "Bekasi" },
  { hari: "Rabu", jam: "17.00 – 18.00", kelas: "Junior Athlete", cabang: "Bekasi" },
  { hari: "Kamis", jam: "16.00 – 17.30", kelas: "Kelas Kompetisi", cabang: "Jakarta Selatan" },
  { hari: "Jumat", jam: "19.00 – 20.15", kelas: "Dewasa & Kebugaran", cabang: "Tangerang" },
  { hari: "Sabtu", jam: "09.00 – 09.45", kelas: "Little Tigers", cabang: "Jakarta Selatan" },
  { hari: "Sabtu", jam: "10.00 – 11.00", kelas: "Junior Athlete", cabang: "Jakarta Selatan" },
  { hari: "Sabtu", jam: "13.00 – 14.30", kelas: "Kelas Kompetisi", cabang: "Bekasi" },
]

const KELAS_FILTER = ["Semua", "Little Tigers", "Junior Athlete", "Dewasa & Kebugaran", "Kelas Kompetisi"]

function JadwalPage() {
  const [filter, setFilter] = useState("Semua")

  const jadwalTampil = useMemo(
    () => (filter === "Semua" ? JADWAL : JADWAL.filter(j => j.kelas === filter)),
    [filter]
  )

  return (
    <Layout>
      <Seo
        title="Jadwal Kelas"
        description="Lihat jadwal lengkap kelas Taekwondo Garuda Club di tiga cabang: Jakarta Selatan, Bekasi, dan Tangerang. Filter berdasarkan jenis kelas."
        pathname="/jadwal/"
      />

      <section className={styles.header}>
        <div className="container">
          <p className="eyebrow">Jadwal Kelas</p>
          <h1 className={styles.title}>Pilih Jadwal yang Sesuai dengan Anda</h1>
          <p className={styles.lead}>
            Tersedia di tiga cabang. Filter tabel di bawah untuk melihat jadwal per jenis kelas.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.filters} role="group" aria-label="Filter jenis kelas">
          {KELAS_FILTER.map(k => (
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

        <RevealOnScroll className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className="visually-hidden">Jadwal kelas Taekwondo Garuda Club</caption>
            <thead>
              <tr>
                <th scope="col">Hari</th>
                <th scope="col">Jam</th>
                <th scope="col">Kelas</th>
                <th scope="col">Cabang</th>
              </tr>
            </thead>
            <tbody>
              {jadwalTampil.map((j, i) => (
                <tr key={`${j.hari}-${j.jam}-${i}`}>
                  <td data-label="Hari">{j.hari}</td>
                  <td data-label="Jam" className={styles.mono}>{j.jam}</td>
                  <td data-label="Kelas">{j.kelas}</td>
                  <td data-label="Cabang">{j.cabang}</td>
                </tr>
              ))}
              {jadwalTampil.length === 0 && (
                <tr>
                  <td colSpan={4}>Tidak ada jadwal untuk kelas ini.</td>
                </tr>
              )}
            </tbody>
          </table>
        </RevealOnScroll>

        <p className={styles.note}>
          Jadwal dapat berubah sewaktu-waktu menjelang kompetisi resmi.
          Hubungi kami di halaman{" "}
          <Link to="/kontak/">Kontak</Link> untuk konfirmasi sebelum datang pertama kali.
        </p>
      </section>
    </Layout>
  )
}

export default JadwalPage

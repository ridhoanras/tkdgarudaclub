import React from "react"
import RevealOnScroll from "./revealOnScroll"
import * as styles from "./beltPath.module.css"

const RANKS = [
  { geup: "10 Geup", nama: "Putih", warna: "#f6f2e9", teks: "#14110f", makna: "Kepolosan & awal langkah" },
  { geup: "9 Geup", nama: "Kuning", warna: "#f2c230", teks: "#14110f", makna: "Benih menembus tanah" },
  {
    geup: "8 Geup",
    nama: "Kuning Strip Hijau",
    warna: "linear-gradient(100deg, #f2c230 0%, #f2c230 62%, #3f8f4e 62%, #3f8f4e 100%)",
    teks: "#14110f",
    makna: "Tunas mulai terlihat",
  },
  { geup: "7 Geup", nama: "Hijau", warna: "#3f8f4e", teks: "#f6f2e9", makna: "Tunas mulai tumbuh" },
  {
    geup: "6 Geup",
    nama: "Hijau Strip Biru",
    warna: "linear-gradient(100deg, #3f8f4e 0%, #3f8f4e 62%, #2159a8 62%, #2159a8 100%)",
    teks: "#f6f2e9",
    makna: "Tumbuh menjangkau langit",
  },
  { geup: "5 Geup", nama: "Biru", warna: "#2159a8", teks: "#f6f2e9", makna: "Langit, arah tumbuh ke atas" },
  {
    geup: "4 Geup",
    nama: "Biru Strip Merah",
    warna: "linear-gradient(100deg, #2159a8 0%, #2159a8 62%, #c8102e 62%, #c8102e 100%)",
    teks: "#f6f2e9",
    makna: "Bahaya mulai terasa dekat",
  },
  { geup: "3 Geup", nama: "Merah", warna: "#c8102e", teks: "#f6f2e9", makna: "Kehati-hatian & kendali diri" },
  {
    geup: "2 Geup",
    nama: "Merah Strip Hitam 1",
    warna: "linear-gradient(100deg, #c8102e 0%, #c8102e 78%, #14110f 78%, #14110f 100%)",
    teks: "#f6f2e9",
    makna: "Ambang menuju kematangan",
  },
  {
    geup: "1 Geup",
    nama: "Merah Strip Hitam 2",
    warna:
      "linear-gradient(100deg, #c8102e 0%, #c8102e 55%, #14110f 55%, #14110f 65%, #c8102e 65%, #c8102e 80%, #14110f 80%, #14110f 100%)",
    teks: "#f6f2e9",
    makna: "Persiapan terakhir sebelum Dan",
  },
  { geup: "1 Dan", nama: "Hitam", warna: "#14110f", teks: "#c9a227", makna: "Kematangan & tanggung jawab" },
]

/**
 * Jalur Sabuk — elemen tanda tangan visual situs ini.
 * Karena kenaikan sabuk Taekwondo memang urutan nyata (bukan urutan dekoratif),
 * penomoran & garis penghubung di sini benar-benar membawa informasi.
 */
function BeltPath() {
  return (
    <ol className={styles.path} aria-label="Urutan tingkatan sabuk Taekwondo">
      {RANKS.map((rank, index) => (
        <RevealOnScroll as="li" key={rank.nama} delay={index * 90} className={styles.step}>
          <span
            className={styles.swatch}
            style={{ background: rank.warna, color: rank.teks }}
            aria-hidden="true"
          >
            {rank.geup}
          </span>
          <span className={styles.label}>{rank.nama}</span>
          <span className={styles.meaning}>{rank.makna}</span>
        </RevealOnScroll>
      ))}
    </ol>
  )
}

export default BeltPath
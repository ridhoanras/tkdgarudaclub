import React from "react"
import RevealOnScroll from "./revealOnScroll"
import * as styles from "./beltPath.module.css"

const RANKS = [
  { geup: "10 Geup", nama: "Putih", warna: "#f6f2e9", teks: "#14110f", makna: "Kepolosan & awal langkah" },
  { geup: "8 Geup", nama: "Kuning", warna: "#f2c230", teks: "#14110f", makna: "Benih menembus tanah" },
  { geup: "6 Geup", nama: "Hijau", warna: "#3f8f4e", teks: "#f6f2e9", makna: "Tunas mulai tumbuh" },
  { geup: "4 Geup", nama: "Biru", warna: "#2159a8", teks: "#f6f2e9", makna: "Langit, arah tumbuh ke atas" },
  { geup: "2 Geup", nama: "Merah", warna: "#c8102e", teks: "#f6f2e9", makna: "Kehati-hatian & kendali diri" },
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
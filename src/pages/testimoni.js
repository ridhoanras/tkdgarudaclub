import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import SEED_TESTIMONI from "../data/testimoni"
import * as styles from "./testimoni.module.css"

const PERAN_OPTIONS = [
  "Orang tua murid",
  "Murid / Atlet",
  "Alumni",
  "Kelas Dewasa & Kebugaran",
  "Lainnya",
]

const EMPTY_FORM = {
  nama: "",
  peran: PERAN_OPTIONS[0],
  kutipan: "",
  "bot-field": "", // honeypot: kolom tersembunyi untuk menjebak bot spam
}

const API_URL = "/api/testimoni"

/**
 * Halaman ini sengaja TIDAK didaftarkan di NAV_LINKS (src/components/header.js)
 * sehingga tidak muncul di menu utama — hanya bisa diakses lewat tautan
 * "Lihat semua cerita" di beranda atau URL langsung /testimoni/.
 *
 * PUBLIKASI OTOMATIS, TANPA PENINJAUAN:
 * Form ini mengirim langsung ke Netlify Function (netlify/functions/testimoni.js)
 * yang disimpan di Netlify Blobs. Begitu tervalidasi (bukan bot, panjang teks wajar),
 * testimoni langsung tersimpan dan langsung tampil untuk SEMUA pengunjung lain —
 * tidak ada langkah persetujuan admin. Satu-satunya pengaman terhadap spam adalah
 * validasi panjang teks, honeypot, dan rate-limit per IP di sisi server.
 *
 * CATATAN PENGEMBANGAN: endpoint /api/testimoni hanya aktif saat dijalankan lewat
 * `netlify dev` (bukan `gatsby develop` biasa) atau setelah di-deploy ke Netlify,
 * karena itu memerlukan Netlify Functions + Netlify Blobs. Saat endpoint tidak
 * tersedia, halaman ini otomatis jatuh ke daftar bawaan (src/data/testimoni.js)
 * dan formulir menampilkan pesan penjelasan alih-alih gagal diam-diam.
 */
function TestimoniPage() {
  const [items, setItems] = useState(SEED_TESTIMONI.map((t, i) => ({ ...t, id: `seed-${i}` })))
  const [apiAvailable, setApiAvailable] = useState(true)
  const [loading, setLoading] = useState(true)

  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState("")

  useEffect(() => {
    let cancelled = false
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error("bad response")
        return res.json()
      })
      .then(data => {
        if (cancelled) return
        if (Array.isArray(data.items)) setItems(data.items)
      })
      .catch(() => {
        if (cancelled) return
        setApiAvailable(false)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (form.nama.trim().length < 3) next.nama = "Nama minimal 3 karakter."
    if (form.kutipan.trim().length < 20)
      next.kutipan = "Ceritakan pengalamanmu minimal 20 karakter."
    if (form.kutipan.trim().length > 500)
      next.kutipan = "Maksimal 500 karakter — ringkas jadi inti ceritanya ya."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setServerError("")

    // Honeypot terisi → kemungkinan besar bot, hentikan diam-diam tanpa memberi tahu bot.
    if (form["bot-field"]) {
      setStatus("success")
      return
    }

    if (!validate()) return

    setStatus("sending")
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setServerError(data.error || "Gagal mengirim. Coba lagi.")
        if (data.errors) setErrors(data.errors)
        setStatus("error")
        return
      }

      // Auto-publish sungguhan: taruh entri baru di urutan paling atas,
      // langsung terlihat di halaman ini — dan langsung terlihat oleh
      // pengunjung lain begitu mereka memuat /testimoni/.
      if (data.item) setItems(list => [data.item, ...list])
      setStatus("success")
      setForm(EMPTY_FORM)
    } catch (err) {
      setServerError(
        apiAvailable
          ? "Gagal mengirim. Coba lagi atau hubungi kami lewat WhatsApp."
          : "Fitur kirim cerita hanya aktif di situs yang sudah live/di-deploy ke Netlify."
      )
      setStatus("error")
    }
  }

  return (
    <Layout>
      <Seo
        title="Cerita dari Keluarga Garuda Club"
        description="Baca cerita lengkap murid, orang tua, dan atlet Taekwondo Garuda Club, atau bagikan pengalamanmu sendiri — langsung tayang."
        pathname="/testimoni/"
      />

      <section className={styles.header}>
        <div className="container">
          <p className="eyebrow">Kata Mereka</p>
          <h1 className={styles.title}>Cerita dari Keluarga Garuda Club</h1>
          <p className={styles.lead}>
            Kumpulan pengalaman murid, orang tua, dan atlet yang berlatih bersama kami.
            Punya ceritamu sendiri? Tulis di bawah — langsung tayang di halaman ini.
          </p>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        {!apiAvailable && (
          <p className={styles.empty}>
            Menampilkan cerita bawaan. Kirim &amp; tayang otomatis baru aktif setelah situs berjalan
            di Netlify (dengan <code>netlify dev</code> saat pengembangan lokal).
          </p>
        )}
        {loading ? (
          <p className={styles.empty}>Memuat cerita…</p>
        ) : items.length > 0 ? (
          <div className={styles.testiGrid}>
            {items.map((t, i) => (
              <RevealOnScroll
                as="blockquote"
                key={t.id || `${t.nama}-${i}`}
                delay={Math.min(i, 6) * 80}
                className={styles.testiCard}
              >
                <p>&ldquo;{t.kutipan}&rdquo;</p>
                <footer>
                  <strong>{t.nama}</strong>
                  <span>{t.peran}</span>
                </footer>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>Belum ada cerita yang tayang. Jadilah yang pertama!</p>
        )}
      </section>

      <section className={`${styles.section} ${styles.formSection}`}>
        <div className="container">
          <RevealOnScroll>
            <p className="eyebrow">Bagikan Ceritamu</p>
            <h2 className={styles.h2}>Tulis Testimonimu Sendiri</h2>
            <p className={styles.lead} style={{ color: "var(--color-steel-light)" }}>
              Ceritamu langsung tayang di halaman ini begitu dikirim — tidak ada tahap
              peninjauan admin. Mohon tulis dengan sopan ya.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100} as="div" className={styles.formWrap}>
            {status === "success" ? (
              <div className={styles.success} role="status">
                <strong>Terima kasih! Ceritamu sudah tayang.</strong>
                Gulir ke atas untuk melihatnya di daftar cerita.
                <div style={{ marginTop: "var(--space-sm)" }}>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setStatus("idle")}
                  >
                    Tulis cerita lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className={styles.form}>
                {/* Honeypot — disembunyikan dari pengguna asli lewat CSS. */}
                <p className={styles.honeypot} aria-hidden="true">
                  <label>
                    Jangan isi kolom ini
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      name="bot-field"
                      value={form["bot-field"]}
                      onChange={handleChange}
                    />
                  </label>
                </p>

                <label className={styles.field}>
                  Nama
                  <input
                    type="text"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.nama}
                    aria-describedby={errors.nama ? "err-nama" : undefined}
                  />
                  {errors.nama && <span id="err-nama" className={styles.error}>{errors.nama}</span>}
                </label>

                <label className={styles.field}>
                  Peran / Kelas
                  <select name="peran" value={form.peran} onChange={handleChange}>
                    {PERAN_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.field}>
                  Ceritamu
                  <textarea
                    name="kutipan"
                    rows={5}
                    placeholder="Ceritakan pengalamanmu berlatih di Garuda Club…"
                    value={form.kutipan}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    aria-invalid={!!errors.kutipan}
                    aria-describedby={errors.kutipan ? "err-kutipan" : undefined}
                  />
                  {errors.kutipan && (
                    <span id="err-kutipan" className={styles.error}>{errors.kutipan}</span>
                  )}
                </label>

                <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? "Mengirim…" : "Kirim & Tayangkan Ceritaku"}
                </button>

                {status === "error" && (
                  <p className={styles.error} role="alert">
                    {serverError}
                  </p>
                )}

                <p className={styles.privacyNote}>
                  Dengan mengirim, ceritamu (nama &amp; peran) langsung tampil publik di
                  halaman ini tanpa ditinjau terlebih dahulu.
                </p>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </section>
    </Layout>
  )
}

export default TestimoniPage

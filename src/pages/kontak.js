import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RevealOnScroll from "../components/revealOnScroll"
import * as styles from "./kontak.module.css"

const PROGRAM_OPTIONS = [
  "Little Tigers (5–7 th)",
  "Junior Athlete (8–14 th)",
  "Dewasa & Kebugaran",
  "Kelas Kompetisi",
  "Belum yakin, ingin konsultasi",
]

function encodeForm(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

function KontakPage() {
  const { site } = useStaticQuery(graphql`
    query KontakQuery {
      site {
        siteMetadata {
          contact {
            phone
            email
            address
          }
          social {
            whatsapp
          }
        }
      }
    }
  `)
  const { contact, social } = site.siteMetadata

  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    email: "",
    program: PROGRAM_OPTIONS[0],
    pesan: "",
    "bot-field": "", // honeypot: kolom tersembunyi untuk menjebak bot spam
  })
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (form.nama.trim().length < 3) next.nama = "Nama lengkap minimal 3 karakter."
    if (!/^\+?[0-9 ]{9,15}$/.test(form.telepon.trim())) next.telepon = "Nomor telepon tidak valid."
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Format email tidak valid."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Honeypot terisi → kemungkinan besar bot, hentikan diam-diam tanpa memberi tahu bot.
    if (form["bot-field"]) {
      setStatus("success")
      return
    }

    if (!validate()) return

    setStatus("sending")
    try {
      // Dikirim sebagai Netlify Forms (data-netlify="true" di bawah).
      // Untuk hosting lain, ganti endpoint ini dengan serverless function
      // yang melakukan validasi ulang di server + proteksi reCAPTCHA/Turnstile —
      // JANGAN pernah percaya validasi dari sisi klien saja.
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "pendaftaran-uji-coba", ...form }),
      })
      setStatus("success")
      setForm(f => ({ ...f, nama: "", telepon: "", email: "", pesan: "" }))
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <Layout>
      <Seo
        title="Kontak & Daftar Kelas Percobaan"
        description="Hubungi Taekwondo Garuda Club atau daftar kelas percobaan gratis. Tersedia telepon, email, WhatsApp, dan formulir pendaftaran online."
        pathname="/kontak/"
      />

      <section className={styles.header}>
        <div className="container">
          <p className="eyebrow">Kontak</p>
          <h1 className={styles.title}>Mari Mulai Langkah Pertama</h1>
          <p className={styles.lead}>
            Isi formulir di bawah untuk kelas percobaan gratis, atau hubungi kami langsung.
          </p>
        </div>
      </section>

      <section className={`container ${styles.grid}`}>
        <RevealOnScroll className={styles.infoCol}>
          <h2 className={styles.h2}>Informasi Kontak</h2>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoLabel}>Alamat</span>
              {contact.address}
            </li>
            <li>
              <span className={styles.infoLabel}>Telepon</span>
              <a href={`tel:${contact.phone.replace(/\s|-/g, "")}`}>{contact.phone}</a>
            </li>
            <li>
              <span className={styles.infoLabel}>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className={styles.infoLabel}>WhatsApp</span>
              <a href={social.whatsapp} target="_blank" rel="noreferrer noopener">
                Chat langsung
              </a>
            </li>
          </ul>
          <div className={styles.mapPlaceholder} role="img" aria-label="Peta lokasi dojang Garuda Club">
            <span>Peta Lokasi Dojang</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100} as="div" id="daftar" className={styles.formCol}>
          <h2 className={styles.h2}>Formulir Pendaftaran</h2>

          {status === "success" ? (
            <p className={styles.success} role="status">
              Terima kasih! Tim kami akan menghubungi Anda dalam 1×24 jam.
            </p>
          ) : (
            <form
              name="pendaftaran-uji-coba"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
              className={styles.form}
            >
              {/* Diperlukan agar Netlify mendeteksi form ini saat build statis */}
              <input type="hidden" name="form-name" value="pendaftaran-uji-coba" />

              {/* Honeypot — disembunyikan dari pengguna asli lewat CSS, bukan display:none
                  (screen reader tetap perlu diberi tahu ini bukan untuk diisi manusia) */}
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
                Nama Lengkap
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
                Nomor Telepon / WhatsApp
                <input
                  type="tel"
                  name="telepon"
                  value={form.telepon}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                  aria-invalid={!!errors.telepon}
                  aria-describedby={errors.telepon ? "err-telepon" : undefined}
                />
                {errors.telepon && <span id="err-telepon" className={styles.error}>{errors.telepon}</span>}
              </label>

              <label className={styles.field}>
                Email (opsional)
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                />
                {errors.email && <span id="err-email" className={styles.error}>{errors.email}</span>}
              </label>

              <label className={styles.field}>
                Program yang Diminati
                <select name="program" value={form.program} onChange={handleChange}>
                  {PROGRAM_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                Pesan Tambahan (opsional)
                <textarea name="pesan" rows={4} value={form.pesan} onChange={handleChange} />
              </label>

              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Mengirim…" : "Kirim Pendaftaran"}
              </button>

              {status === "error" && (
                <p className={styles.error} role="alert">
                  Gagal mengirim. Coba lagi atau hubungi kami lewat WhatsApp.
                </p>
              )}

              <p className={styles.privacyNote}>
                Data Anda hanya digunakan untuk menghubungi Anda terkait pendaftaran
                dan tidak dibagikan ke pihak ketiga.
              </p>
            </form>
          )}
        </RevealOnScroll>
      </section>
    </Layout>
  )
}

export default KontakPage

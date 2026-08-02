import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.css"

const NAV_LINKS = [
  { to: "/tentang-kami/", label: "Tentang Kami" },
  { to: "/program-latihan/", label: "Program" },
  { to: "/pelatih/", label: "Pelatih" },
  { to: "/jadwal/", label: "Jadwal" },
  { to: "/galeri/", label: "Galeri" },
  { to: "/kontak/", label: "Kontak" },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    // Kunci scroll body saat menu mobile terbuka
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = e => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <>
      <a href="#konten-utama" className="visually-hidden">
        Langsung ke konten utama
      </a>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.bar}`}>
          <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
            <StaticImage
              src="../images/logo-garuda.png"
              alt="Logo Taekwondo Garuda Club"
              className={styles.brandMark}
              placeholder="blurred"
              width={48}
              height={48}
              loading="eager"
            />
            <span className={styles.brandName}>
              
              <br />
              
            </span>
          </Link>

          <nav className={styles.navDesktop} aria-label="Navigasi utama">
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.to}>
                  <Link to={link.to} activeClassName={styles.activeLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link to="/kontak/#daftar" className="btn btn-primary">
              Daftar Uji Coba
            </Link>
            <button
              type="button"
              className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              onClick={() => setOpen(o => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Dropdown mobile: visibilitas & animasi dikontrol lewat class .navMobileOpen,
            BUKAN atribut hidden — atribut hidden bentrok dengan CSS class kita
            sehingga menu jadi selalu tampil atau tidak bisa animasi. */}
        <nav
          id="menu-mobile"
          className={`${styles.navMobile} ${open ? styles.navMobileOpen : ""}`}
          aria-label="Navigasi mobile"
          aria-hidden={!open}
        >
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.navMobileCta}>
              <Link
                to="/kontak/#daftar"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                Daftar Uji Coba
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

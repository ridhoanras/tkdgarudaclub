import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./footer.module.css"

function Footer() {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            instagram
            facebook
            youtube
            whatsapp
          }
          contact {
            phone
            email
            address
          }
        }
      }
    }
  `)

  const { social, contact } = site.siteMetadata
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className={styles.brand}>Garuda Club</span>
          <p className={styles.tagline}>
            Dojang resmi untuk membentuk disiplin, karakter, dan prestasi lewat
            Taekwondo — dari sabuk putih hingga podium kompetisi.
          </p>
          <ul className={styles.social}>
            <li>
              <a href={social.instagram} target="_blank" rel="noreferrer noopener">
                Instagram
              </a>
            </li>
            <li>
              <a href={social.facebook} target="_blank" rel="noreferrer noopener">
                Facebook
              </a>
            </li>
            <li>
              <a href={social.youtube} target="_blank" rel="noreferrer noopener">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.colTitle}>Jelajahi</h3>
          <ul className={styles.links}>
            <li><Link to="/tentang-kami/">Tentang Kami</Link></li>
            <li><Link to="/program-latihan/">Program Latihan</Link></li>
            <li><Link to="/pelatih/">Pelatih</Link></li>
            <li><Link to="/jadwal/">Jadwal Kelas</Link></li>
            <li><Link to="/galeri/">Galeri</Link></li>
          </ul>
        </div>

        <div>
          <h3 className={styles.colTitle}>Kontak</h3>
          <ul className={styles.links}>
            <li>{contact.address}</li>
            <li><a href={`tel:${contact.phone.replace(/\s|-/g, "")}`}>{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a href={social.whatsapp} target="_blank" rel="noreferrer noopener">Chat via WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} Taekwondo Garuda Club. Seluruh hak cipta dilindungi.</span>
        <span>Dibangun dengan Gatsby JS — cepat, aman, ramah SEO.</span>
      </div>
    </footer>
  )
}

export default Footer

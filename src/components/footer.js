<<<<<<< HEAD
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
=======
import { Link } from "gatsby"
import React from "react"

import logo from "../images/3D-liquid-abstract-5.webp"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="Holo"></img>
              <p className="text-black opacity-70 text-sm mt-5 ">
                Tempat latihan Taekwondo<br></br> terbaik di Tangerang Raya
                <br></br>
                yaitu Taekwondo Garuda Club.
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                  Build by
                  </a>
                  
                  <a
                    className="text-black font-semibold ml-1"
                    target="_blank"
                    href="https://tkdgarudaclub.or.id"
                  >
                    Taekwondo Garuda Club
                  </a>

                  <div class="flex items-center space-x-2">
                  <a
                    href="https://www.youtube.com/@GARUDAFAMILY"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/Youtube-Logo.png"
                      alt="Youtube"
                    ></img>
                  </a>
                  <a
                    href="https://www.instagram.com/tkdgaruda/?hl=en"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/Instagram-Logo.png"
                      alt="Instagram"
                    ></img>
                  </a>
                  </div>
                </p>
              </div>
            </div>

            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>{" "}
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 5f9371aa013a2f6cb3a2bf501153b2ab3db907d9
  )
}

export default Footer

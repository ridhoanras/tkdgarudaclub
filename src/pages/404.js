import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./404.module.css"

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="Halaman Tidak Ditemukan" pathname="/404/" />
      <section className={styles.wrap}>
        <div className="container">
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Sepertinya Anda Keluar Matras</h1>
          <p className={styles.text}>
            Halaman yang Anda cari tidak ditemukan atau sudah dipindahkan.
          </p>
          <Link to="/" className="btn btn-primary">
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

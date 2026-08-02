<<<<<<< HEAD
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
=======
import * as React from "react"
import Button from "../components/Atoms/button"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found"
         description="404: Not found"
    />
    <div className="404-p">
    <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <a href="/"><Button
                title="Return Home"
                colorClass="text-white bg-gradient-to-r from-pink to-purple"
                marginClass="mt-5"
              ></Button></a>
      </div>
  </Layout>
)
>>>>>>> 5f9371aa013a2f6cb3a2bf501153b2ab3db907d9

export default NotFoundPage

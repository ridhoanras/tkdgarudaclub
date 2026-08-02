import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/global.css"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="konten-utama">{children}</main>
      <Footer />
    </>
  )
}

export default Layout

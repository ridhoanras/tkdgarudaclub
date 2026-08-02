<<<<<<< HEAD
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
=======
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
>>>>>>> 5f9371aa013a2f6cb3a2bf501153b2ab3db907d9
  )
}

export default Layout

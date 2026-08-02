<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
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
<<<<<<< HEAD
=======
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
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
  )
}

export default Layout

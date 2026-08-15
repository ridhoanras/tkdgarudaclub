/**
 * Konfigurasi utama Gatsby untuk situs Taekwondo Garuda Club.
 * Ganti `siteUrl` dengan domain asli sebelum deploy ke production —
 * nilai ini dipakai oleh plugin sitemap & robots.txt untuk SEO.
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Taekwondo Garuda Club",
    titleTemplate: "%s | Taekwondo Garuda Club",
    description:
      "Taekwondo Garuda Club — dojang resmi untuk anak, remaja, dan dewasa. Latihan disiplin, sabuk resmi Kukkiwon, dan pembinaan atlet kompetisi di Indonesia.",
    siteUrl: "https://www.tkdgarudaclub.or.id",
    author: "Taekwondo Garuda Club",
    social: {
      instagram: "https://instagram.com/taekwondogarudaclub",
      facebook: "https://facebook.com/taekwondogarudaclub",
      youtube: "https://youtube.com/@taekwondogarudaclub",
      whatsapp: "https://wa.me/6281234567890",
    },
    contact: {
      phone: "+62 812-3456-7890",
      email: "info@taekwondogarudaclub.id",
      address: "Jl. Garuda Raya No. 88, Jakarta Selatan, DKI Jakarta 12345",
    },
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Taekwondo Garuda Club",
        short_name: "Garuda Club",
        start_url: "/",
        background_color: "#14110F",
        theme_color: "#C8102E",
        display: "standalone",
        icon: "src/images/icon.png", // dibuat otomatis dari logo asli Garuda Club
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404", "/404.html"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.taekwondogarudaclub.id",
        sitemap: "https://www.taekwondogarudaclub.id/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}

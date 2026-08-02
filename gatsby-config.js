<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
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
    siteUrl: "https://www.taekwondogarudaclub.id",
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
<<<<<<< HEAD
=======
=======
module.exports = {
  siteMetadata: {
    title: `Taekwondo Garuda Club`,
    description: `Website Resmi Taekwondo Garuda Club`,
    siteUrl: "https://holo-theme.netlify.app/",
    author: `Travis Lord <hi@travislord.xyz>`,
    keywords: `
    Taekwondo
    Taekwondo Garuda Club,
    Teknik Taekwondo,
    Bela diri,
    Gerakan Taekwondo,
    Semangat Taekwondo,
    Disiplin bela diri,
    Keterampilan fisik,
    Kekuatan mental,
    Klub Taekwondo,
    Kompetisi Taekwondo,
    Pengembangan karakter,
    Filosofi Taekwondo,
    Pelatihan bela diri,
    Latihan fisik,
    Pelatihan Taekwondo di Tangerang,
    Pelatihan Taekwondo di Kota Tangerang,
    Taekwondo untuk anak,
    Kursus Taekwondo di Tangerang,
    Kursus Taekwondo di Kota Tangerang,
    Pendaftaran Taekwondo,
    Ekstrakurikuler Taekwondo,
    Ekskul Taekwondo,
    Ekskul Taekwondo di Tangerang,
    Ekskul Taekwondo di Kota Tangerang,
    Pelatihan Taekwondo,
    Pelatihan Taekwondo di Tangerang,
    Pelatihan Taekwondo di Kota Tangerang,
    Taekwondo untuk anak,
    Kursus Taekwondo di Tangerang,
    Kursus Taekwondo di Kota Tangerang,
    Pendaftaran Taekwondo,
    Ekstrakurikuler Taekwondo,
    Ekskul Taekwondo,
    Ekskul Taekwondo di Tangerang,
    Ekskul Taekwondo di Kota Tangerang,
    `,
  },
  plugins: [
    `gatsby-plugin-image`,            
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
>>>>>>> 5f9371aa013a2f6cb3a2bf501153b2ab3db907d9
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
        path: `${__dirname}/src/images`,
      },
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Taekwondo Garuda Club",
        short_name: "Garuda Club",
        start_url: "/",
        background_color: "#14110F",
        theme_color: "#C8102E",
        display: "standalone",
        // Placeholder sederhana (huruf "G" di atas ink+merah). Ganti dengan
        // logo asli 512x512 di path yang sama kapan pun sudah tersedia.
        icon: "src/images/icon.png",
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
<<<<<<< HEAD
=======
=======
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "_content",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // destinationDir: "public",
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                `bmp`,
                `tiff`,
                `webp`,
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: false,
              showCaptions: false,
              quality: 100,
              disableBgImageOnAlpha: false,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Holo - Gatsby Starter Theme`,
        short_name: `Holo`,
        start_url: `/`,
        background_color: `#ebebfa`,
        theme_color: `#ebebfa`,
        display: `standalone`,
        icon: `src/images/3D-liquid-abstract-5.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
>>>>>>> 5f9371aa013a2f6cb3a2bf501153b2ab3db907d9
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
  ],
}

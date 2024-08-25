module.exports = {
  siteMetadata: {
    title: `Taekwondo Garuda Club`,
    description: `Website Resmi Taekwondo Garuda Club`,
    siteUrl: "https://holo-theme.netlify.app/",
    author: `Travis Lord <hi@travislord.xyz>`,
    keywords: `
    Taekwondo Garuda Club Banjar Wijaya,
    Garuda Taekwondo Sitra Club,
    Word Taekwondo Federation Ruls,
    Sejarah Singkat Taekwondo Garuda Club,
    Sejarah Taekwondo Indonesia,
    Sejarah Taekwondo Masuk Ke Indonesia,
    Sejarah PBTI,
    Ujian Kenaikan Tali Pinggang Taekwondo,
    Ujian Kenaikan Sabuk Taekwondo,
    Ujian Kenaikan Sabuk Taekwondo 2023,
    Biaya Ujian Kenaikan Sabuk Taekwondo 2023,
    Materi Ujian Kenaikan Sabuk Taekwondo,
    Biaya Ujian Kenaikan Sabuk Taekwondo,
    UKT Taekwondo Adalah,
    UKT Taekwondo Berapa Bulan Sekali,
    UKT Taekwondo 2023,
    UKT Taekwondo Sabuk Kuning,
    UKT Taekwondo Ngapain Aja,
    Ujian Kenaikan Tingkat Taekwondo,
    Biaya UKT Taekwondo,
    Materi UKT Taekwondo Sabuk Putih,
    Matri UKT Taekwondo,
    Taekwondo Requirements,
    Taekwondo Fees,
    5 Principle Of Taekwondo,
    Penguji Taekwondo,
    `,
  },
  plugins: [
    `gatsby-plugin-image`,        
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
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
  ],
}

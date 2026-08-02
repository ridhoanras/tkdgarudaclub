<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Komponen SEO terpusat.
 * Setiap halaman WAJIB memanggil <Seo title="..." description="..." pathname="/slug" />
 * agar title, meta description, Open Graph, Twitter Card, canonical URL,
 * dan structured data (JSON-LD) selalu konsisten dan lengkap — inti dari SEO teknis.
 */
function Seo({ title, description, pathname, image, article = false }) {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          siteUrl
          social {
            instagram
            facebook
            youtube
          }
          contact {
            phone
            email
            address
          }
<<<<<<< HEAD
=======
=======
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
>>>>>>> 5f9371aa013a2f6cb3a2bf501153b2ab3db907d9
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
        }
      }
    }
  `)

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
  const meta = site.siteMetadata
  const seoTitle = title || meta.title
  const seoDescription = description || meta.description
  const seoUrl = `${meta.siteUrl}${pathname || "/"}`
  const seoImage = `${meta.siteUrl}${image || "/og-cover.jpg"}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: meta.title,
    description: meta.description,
    url: meta.siteUrl,
    telephone: meta.contact.phone,
    email: meta.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: meta.contact.address,
      addressCountry: "ID",
    },
    sameAs: [meta.social.instagram, meta.social.facebook, meta.social.youtube],
  }

  return (
    <Helmet title={seoTitle} titleTemplate={title ? meta.titleTemplate : "%s"}>
      <html lang="id" />
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content={meta.title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Keamanan dasar di level dokumen — pelengkap header HTTP di static/_headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="theme-color" content="#c8102e" />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
<<<<<<< HEAD
=======
=======
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: `Pelatihan Taekwondo di Garuda Club: tempat di mana semangat, disiplin, dan teknik bertemu untuk membentuk keunggulan. Bergabunglah dengan kami untuk pengalaman pelatihan yang mendalam.`,
        },
        {
          name: `keywords`,
          content: `Pelatihan Taekwondo, Taekwondo Garuda Club, bela diri, pelatihan fisik dan mental`,
        },
        {
          name: `og:title`,
          content: title,
        },
        {
          name: `og:description`,
          content: `Pelatihan Taekwondo yang mengedepankan semangat dan teknik di Garuda Club. Dapatkan pengalaman unik dalam bela diri.`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://tkdgarudaclub.or.id`,
        },
        {
          property: `og:image`,
          content: `URL_GAMBAR_RELEVAN`, // Tambahkan URL gambar yang sesuai
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: `Pelatihan Taekwondo di Garuda Club dengan pendekatan unik dalam mengembangkan teknik dan semangat.`,
        },
        {
          name: `twitter:image`,
          content: `URL_GAMBAR_RELEVAN`, // Tambahkan URL gambar yang sesuai
        },
      ].concat(meta)}
    />
  )  
}

Seo.defaultProps = {
  lang: `en-AU`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
>>>>>>> 5f9371aa013a2f6cb3a2bf501153b2ab3db907d9
>>>>>>> aa79347e5cd033241896b2e9dbe45e96539706e7
}

export default Seo

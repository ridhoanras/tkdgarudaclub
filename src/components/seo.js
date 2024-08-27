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
        }
      }
    }
  `)

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
          name: `Taekwondo Garuda Club adalah tempat di mana semangat, disiplin, dan teknik bertemu untuk membentuk keunggulan. Kami adalah komunitas taekwondo yang berkomitmen untuk mengembangkan kemampuan fisik dan mental para anggotanya melalui pelatihan yang intensif dan filosofi yang mendalam dari seni bela diri ini.`,
          content: metaDescription,
        },
        {
          property: `TAEKWONDO GARUDA CLUB`,
          content: title,
        },
        {
          property: `Selamat datang di Artikel Resmi Terpercaya Taekwondo Garuda Club, Ini adalah sumber informasi dari perjalanan menuju pencapaian prestasi luar biasa. Bergabunglah dengan kami dan alami transformasi yang memadukan teknik, semangat, dan karakter.`,
          content: metaDescription,
        },
        {
          property: `https://tkdgarudaclub.or.id`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
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
}

export default Seo

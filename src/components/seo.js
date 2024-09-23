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
}

export default Seo

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import favicon from '../res/favicon.png'
import openGraphLogo from '../res/logo.jpg';

const MetaTags = ({ title, description, image, pathname, author, article }) => (
  <StaticQuery
    query={query}
    render={({
               site: {
                 siteMetadata: {
                   defaultTitle,
                   titleTemplate,
                   defaultDescription,
                   siteUrl,
                   defaultImage,
                   defaultAuthor,
                   siteName
                 },
               },
             }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
        author: author || defaultAuthor,
        siteName: siteName || title || defaultTitle,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}
                  link={[
                    { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
                  ]}
          >
            {seo.title && <title>{seo.title}</title>}
            <meta name="robots" content="all"/>
            <meta name="viewport" content="user-scalable=no, width=device-width"/>
            {seo.keywords && (<meta name="keywords" content={seo.keywords} />)}
            {seo.description && (<meta name="description" content={seo.description} />)}
            {seo.url && <meta property="og:url" content={seo.url} />}
            <meta property="og:type" content={article ? "article" : "website"}/>
            {( (article && seo.author) ? true : null) && ( <meta property="og:article:author" content={seo.author}/>)}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (<meta property="og:description" content={seo.description} />)}
            <meta property="og:image" content={openGraphLogo} />
            <meta property="og:image:secure_url" content={openGraphLogo} />
            <meta property="og:image:type" content="image/jpeg" />
            {seo.title && <meta property="og:site_name" content={seo.siteName} />}
          </Helmet>
        </>
      )
    }}
  />
)

export default MetaTags

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  author: PropTypes.string
}

MetaTags.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
  author: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        defaultAuthor: author
        siteName: siteName
      }
    }
  }
`
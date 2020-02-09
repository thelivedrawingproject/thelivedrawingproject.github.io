/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const supportedLanguages = require('./src/locales/locales').supportedLanguages
const defaultLanguage = require('./src/locales/locales').defaultLanguage

const pageLayouts = {
  article: 'article',
  page: 'page',
}

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const language = node.frontmatter.language
    let languageUrlPrefix = ''
    if (language === void 0 || language === null) {
      console.info(
        'No language field in markdown, select default language:' +
          defaultLanguage
      )
      node.frontmatter.language = defaultLanguage
    } else {
      let foundALanguage = false
      // Loop through locales, find a prefix if needed.
      for (let key of Object.keys(supportedLanguages)) {
        if (language === key && language !== defaultLanguage) {
          languageUrlPrefix = `/${supportedLanguages[key].urlPrefix}`
          foundALanguage = true
          break
        }
      }

      if (!foundALanguage) {
        console.warn(
          `Unhandled language for markdown: ${node.frontmatter.language}`
        )
        return
      }
    }

    node.frontmatter.path = `${languageUrlPrefix}${node.frontmatter.path}`
  }
}

// ------------------ Custom pages such as index.js

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(supportedLanguages).map(languageKey => {
      const localizedPath =
        languageKey === defaultLanguage
          ? page.path
          : supportedLanguages[languageKey].urlPrefix + page.path

      return createPage({
        component: page.component,
        path: localizedPath,
        context: {
          locale: languageKey,
        },
      })
    })
    resolve()
  })
}

exports.createPages = ({ actions, graphql }) => {
  /// ---------------- Custom generation for markdown files

  const { createPage } = actions

  const articleLayoutTemplate = path.resolve(`src/layout/BlogPost.js`)
  const pageLayoutTemplate = path.resolve(`src/layout/BasicPage.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { ne: "hidden" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              layout
              title
              language
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Actually creating the page
    const allPages = result.data.allMarkdownRemark.edges
    const pages = allPages.filter(
      edge => edge.node.frontmatter.layout === pageLayouts.page
    )
    const articles = allPages.filter(
      edge => edge.node.frontmatter.layout === pageLayouts.article
    )
    const others = allPages.filter(
      edge =>
        edge.node.frontmatter.layout !== pageLayouts.article &&
        edge.node.frontmatter.layout !== pageLayouts.page
    )

    if (0 < others.length) {
      console.warn('found pages with unhandled layouts. Will ignore them:')
      console.log(others)
    }

    articles.forEach(({ node }, index) => {
      // false if no previous or no next
      const previousPostLooker = () => {
        let indexToLook = index - 1
        while (0 <= indexToLook) {
          // Only lists articles in same language
          if (
            articles[indexToLook].node.frontmatter.language ==
            node.frontmatter.language
          ) {
            return articles[indexToLook].node
          }
          indexToLook--
        }
        return false
      }

      const nextPostLooker = () => {
        let indexToLook = index + 1
        while (indexToLook <= articles.length - 1) {
          // Only lists articles in same language
          if (
            articles[indexToLook].node.frontmatter.language ==
            node.frontmatter.language
          ) {
            return articles[indexToLook].node
          }
          indexToLook++
        }
        return false
      }

      const previousPost = previousPostLooker()
      const nextPost = nextPostLooker()
      createPage({
        path: node.frontmatter.path,
        component: articleLayoutTemplate,
        context: {
          previousPost,
          nextPost,
        }, // additional data can be passed via context
      })
    })

    pages.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageLayoutTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-image-lightbox/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

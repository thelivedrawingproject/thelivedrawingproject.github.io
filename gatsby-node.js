/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const articleLayoutTemplate = path.resolve(`src/layout/blog-post.js`)
  const pageLayoutTemplate = path.resolve(`src/layout/page.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              layout
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
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

      let templateToUse
      if( node.frontmatter.layout === 'page' ) {
        templateToUse = pageLayoutTemplate;
      } else if ( node.frontmatter.layout === 'article' ) {
        templateToUse = articleLayoutTemplate;
      } else {
        console.warn ('Unhandled layout:' + node.frontmatter.layout);
        return;
      }

      createPage({
        path: node.frontmatter.path,
        component: templateToUse,
        context: {}, // additional data can be passed via context
      })
    })
  })
}



exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
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
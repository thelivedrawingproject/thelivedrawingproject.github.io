/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const locales = require('./src/locales/locales');


exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {

  if (node.internal.type === `MarkdownRemark`)
  {
    const language = node.frontmatter.language;
    let languageUrlPrefix = ""
    if(language === void 0 || language === null)
    {
      console.info('No language field in markdown, select default language');

      node.frontmatter.language = 'EN'; // Default language
      // TODO: fix default language in gatsby config or somewhere watever
    }
    else
    {
      const supportedLanguages = locales;
      let foundALanguage = false;
      // Loop through locales, find a prefix if needed.
      for( let key of Object.keys(supportedLanguages) ) {
        console.log(`key ${key} language ${language}`);
        if(language === key && !supportedLanguages[key].default)
        {
          languageUrlPrefix = '/' + supportedLanguages[key].urlPrefix;
          foundALanguage = true;
          break;
        }
      }

      if(!foundALanguage)
      {
        console.warn('Unhandled language for markdown:' + node.frontmatter.language);
        return;
      }
    }

    node.frontmatter.path = `${languageUrlPrefix}${node.frontmatter.path}`;
  }
};

// ------------------ Custom pages such as index.js

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(languageKey => {
      const localizedPath = locales[languageKey].default
        ? page.path
        : locales[languageKey].urlPrefix + page.path

      return createPage({
        component: page.component,
        path: localizedPath,
        context: {
          locale: languageKey
        }
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
      ) {
        edges {
          node {
            frontmatter {
              path
              layout
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
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

      let templateToUse
      if( node.frontmatter.layout === 'page' )
      {
        templateToUse = pageLayoutTemplate;
      }
      else if ( node.frontmatter.layout === 'article' )
      {
        templateToUse = articleLayoutTemplate;
      }
      else
      {
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
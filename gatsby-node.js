/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const supportedLanguages = require('./src/locales/locales').supportedLanguages;
const defaultLanguage = require('./src/locales/locales').defaultLanguage;

const pageLayouts = {
  article: 'article',
  page: 'page',
  mdxBasic: 'mdxBasic'
};

exports.onCreateNode = ({ node }) => {

  // For markdown/Mdx files, check for language field and change url accordingly
  // No URL change for default language
  // Other languages get a /langCode/ prefix on their URLs
  if (node.internal.type === `MarkdownRemark` || node.internal.type === "Mdx") {
    const initialLanguage = node.frontmatter.language;
    let languageUrlPrefix = '';
    // Default language if not defined
    if (initialLanguage === void 0 || initialLanguage === null) {
        console.info(
          'No language field in markdown, select default language:' +
            defaultLanguage
        );
        node.frontmatter.language = defaultLanguage;
    }
    
      let foundALanguageOtherThanDefault = false;
      const language = node.frontmatter.language;
      for (let key of Object.keys(supportedLanguages)) {
        if (language === key && language !== defaultLanguage) {
          languageUrlPrefix = `/${supportedLanguages[key].urlPrefix}`;
          foundALanguageOtherThanDefault = true;
          break;
        }
      }

      if (!foundALanguageOtherThanDefault && language !== defaultLanguage) {
        console.warn(
          `Unhandled language for markdown: ${node.frontmatter.language}. No path change (could conflict with default)`
        )
        return;
      }
      node.frontmatter.path = `${languageUrlPrefix}${node.frontmatter.path}`
    }
}

// Fired after page creation
// used to detect JS pages and create their languages variants
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if(page.context.locale === void 0)
  {
    console.log('got a root page with no lang context. dalate Create one for each language');
 return new Promise((resolve) => {
    deletePage(page);

    Object.keys(supportedLanguages).map((languageKey) => {
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
      });
    });
    resolve();
  });
  }
}

/// ---------------- Custom âge generation for markdown files
exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions;

  const articleLayoutTemplate = path.resolve(`src/layout/BlogPost.js`);
  const pageLayoutTemplate = path.resolve(`src/layout/BasicPage.js`);
  const mdxLayoutTemplate = path.resolve(`src/layout/MdxBasic.js`);

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
      allMdx(
        limit: 1000
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
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // Actually creating the page
    const allPages = [...result.data.allMarkdownRemark.edges, ...result.data.allMdx.edges];

    const pages = allPages.filter(
      (edge) => edge.node.frontmatter.layout === pageLayouts.page
    );
    const articles = allPages.filter(
      (edge) => edge.node.frontmatter.layout === pageLayouts.article
    );

    const mdxBasics = allPages.filter(
    (edge) => edge.node.frontmatter.layout === pageLayouts.mdxBasic
    );

    const others = allPages.filter(
      (edge) =>
        edge.node.frontmatter.layout !== pageLayouts.article &&
        edge.node.frontmatter.layout !== pageLayouts.page &&
        edge.node.frontmatter.layout !== pageLayouts.mdxBasic
    );

    if (0 < others.length) {
      console.warn('found pages with unhandled layouts. Will ignore them:');
      console.log(others);
    }

    articles.forEach(({ node }, index) => {
      // false if no previous or no next
      const previousPostLooker = () => {
        let indexToLook = index - 1;
        while (0 <= indexToLook) {
          // Only lists articles in same language
          if (
            articles[indexToLook].node.frontmatter.language ==
            node.frontmatter.language
          ) {
            return articles[indexToLook].node;
          }
          indexToLook--;
        }
        return false;
      }

      const nextPostLooker = () => {
        let indexToLook = index + 1;
        while (indexToLook <= articles.length - 1) {
          // Only lists articles in same language
          if (
            articles[indexToLook].node.frontmatter.language ==
            node.frontmatter.language
          ) {
            return articles[indexToLook].node;
          }
          indexToLook++;
        }
        return false;
      };

      const previousPost = previousPostLooker();
      const nextPost = nextPostLooker();


      createPage({
        path: node.frontmatter.path,
        component: articleLayoutTemplate,
        context: {
          previousPost,
          nextPost,
        locale: node.frontmatter.language
      }, // additional data can be passed via context
      });
    }); // foreach article

    mdxBasics.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: mdxLayoutTemplate,
        context: {locale: node.frontmatter.language
        }, // additional data can be passed via context
      })
    });

    pages.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageLayoutTemplate,
        context: {locale: node.frontmatter.language
        }, // additional data can be passed via context
      })
    });
    
  });

}

// exports.createPagesStatefully = () => {
//   console.log('override for stateful');
// };

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

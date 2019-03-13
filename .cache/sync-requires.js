const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/maxime/Code/livedrawingproject-showcase/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-layout-basic-page-js": hot(preferDefault(require("/home/maxime/Code/livedrawingproject-showcase/src/layout/BasicPage.js"))),
  "component---src-layout-blog-post-js": hot(preferDefault(require("/home/maxime/Code/livedrawingproject-showcase/src/layout/BlogPost.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/maxime/Code/livedrawingproject-showcase/src/pages/404.js"))),
  "component---src-pages-bookings-js": hot(preferDefault(require("/home/maxime/Code/livedrawingproject-showcase/src/pages/bookings.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/maxime/Code/livedrawingproject-showcase/src/pages/index.js")))
}


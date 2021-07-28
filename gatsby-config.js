module.exports = {
  siteMetadata: {
    siteName: `The Live Drawing Project`,
    title: `The Live Drawing Project`,
    author: 'The Live Drawing Project',
    authorMail: 'livedrawingproject@pm.me',
    titleTemplate: '%s · The Live Drawing Project',
    description:
      'Draw with us ! We make interactive drawing projections where everyone can draw · Videoprojections, Performances, Workshops and more · All around the world · On location or remotely',
    siteUrl: 'https://thelivedrawingproject.com', // for robots plugin
    url: 'https://thelivedrawingproject.com', // No trailing slash allowed!
    favicon: '/favicon.ico',
    thumbImage: '/favicon.ico', // Path to your image you placed in the 'res' folder
    keywords:
      'videoprojection, projection, videomapping, oeuvre participative, participatif, interactif, interactive projection, dessin, dessin participatif, live drawing, drawing, collaborative drawing, the live drawing project, light festival, fête des lumières, art numérique, digital arts', // separated by comas

    /* to hide the icon, put an empty string instead of a link */
    socialLinks: {
      twitter: '',
      facebook: '//facebook.com/TheLiveDrawingProject',
      github: '',
      instagram: '//instagram.com/livedrawingproject',
      vimeo: '',
      youtube: '',
      soundcloud: '',
    },
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',

      options: {
        icon: true,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-catch-links`,

    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin: 0`,
            },
          },

          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },

    `gatsby-plugin-sharp`, // For res processing
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Live Drawing Project`,
        short_name: `Live Drawing`,
        start_url: `/`,
        background_color: `#d6d0cd`,
        theme_color: `#363636`,
        display: `minimal-ui`,
        icon: `src/res/favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://thelivedrawingproject.com',
        sitemap: 'https://thelivedrawingproject.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,

    // Amazing loading progress bar on top of website
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#85b94f`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    `gatsby-plugin-emotion`,
  ],
}

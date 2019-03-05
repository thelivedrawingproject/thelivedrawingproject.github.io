module.exports = {

  siteMetadata: {
    siteName: `The Live Drawing Project`,
    title: `The Live Drawing Project`,
    author: 'The Live Drawing Project',
    titleTemplate: "%s · The Live Drawing Project",
    description: "The Live Drawing Project · Real-time collaborative drawing show · Welcome to our website",
    url: "https://thelivedrawingproject.com", // No trailing slash allowed!
    image: "/static/favicon.png", // Path to your image you placed in the 'static' folder
    keywords: "live drawing, drawing, digital arts, the live drawing project, collaborative art, art", // separated by comas

    /* to hide the icon, put an empty string instead of a link */
    socialLinks: {
      twitter: '',
      facebook: '//facebook.com/TheLiveDrawingProject',
      github: '',
      instagram: '//instagram.com/livedrawingproject',
      vimeo: '',
      youtube: '',
      soundcloud: ''
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
            resolve: "gatsby-remark-copy-linked-files",
          },

        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },

    `gatsby-plugin-sharp`, // For static processing
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
        icon: `src/static/favicon.png`, // This path is relative to the root of the site.
      },
    },

  ],
}

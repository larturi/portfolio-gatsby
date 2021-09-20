require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Portfolio Leandro Arturi`,
    description: `Portfolio de Leandro Arturi: Licenciado en Sistemas (UBA) & Desarrollador Web Full Stack.`,
    author: `@leandroarturi`,
    image: `https://twitter.com/leandroarturi/photo`,
    url: `https://www.leandroarturi.com.ar`,
    twitterUsername: '@leandroarturi',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-minify`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leandro Arturi`,
        short_name: `Home`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        icons: [
          {
            src: `/favicons/android-icon-36x36.png`,
            sizes: `36x36`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },

          {
            src: `/favicons/apple-icon-57x57.png`,
            sizes: `57x57`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-60x60.png`,
            sizes: `60x60`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-76x76.png`,
            sizes: `76x76`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-114x114.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-120x120.png`,
            sizes: `120x120`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },

          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url: 'http://apirest.com.ar:3100/graphql',
      },
    },
  ],
};

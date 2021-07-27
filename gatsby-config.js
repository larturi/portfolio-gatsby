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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        icons: [
          {
            src: `/icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
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
        url: process.env.GATSBY_STRAPI_GRAPHQL_ENDPOINT + '/graphql',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

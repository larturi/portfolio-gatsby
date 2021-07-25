module.exports = {
  siteMetadata: {
    title: `Portfolio Leandro Arturi`,
    description: `Leandro Arturi: Licenciado en Sistemas de Información. Desarrollador Web Full Stack.`,
    author: `@leandroarturi`,
    siteUrl: `https://leandroarturi.com.ar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://apirest.com.ar:3100`,
        queryLimit: 1000,
        collectionTypes: [
          `cursos`,
          `docencias`,
          `educations`,
          `jobs`,
          `projects`,
          `socials`,
          `tecnologias`,
        ],
        singleTypes: [`about`, `home`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

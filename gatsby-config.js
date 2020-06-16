module.exports = {
  plugins: [
    `gatsby-theme-docz`,
    `gatsby-transformer-sharp`,
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-27016995-1",
      }
     }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: `/guides`
};

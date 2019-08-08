module.exports = {
  siteMetadata: {
    title: `Desafinado`,
    description: `Desafinado is ideal for your club, function, restaurant, bar or private
    party when you want good music that allows easy conversation.`,
    author: `@gillkyle`,
    siteUrl: `https://gatsby-starter-landing-page.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

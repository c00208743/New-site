module.exports = {
  siteMetadata: {
    title: 'Jamie Murphy Website',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-KRRTV7C",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },

    },
    'gatsby-plugin-resolve-src',
  ]
};

module.exports = {
  siteMetadata: {
    title: `fx win32k reports`,
    revision: `0160424142d1`,
  },
  pathPrefix: "/fx-win32k-report",
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logs`,
        path: `${__dirname}/logs/win32k/`,
      },
    },
  ],
};

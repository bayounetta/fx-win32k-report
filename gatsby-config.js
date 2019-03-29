module.exports = {
  pathPrefix: "/fx-win32k-report",
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./logs/win32k/`,
      },
    },
  ],
};

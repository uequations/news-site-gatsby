module.exports = {
  siteMetadata: {
    title: `IRS NEWS | UNIVERSAL EQUATIONS`,
    name: `Univeral Equations`,
    siteUrl: `https://www.uequations.com`,
    description: `The Internal Revenue Service is the nation's tax collection agency and administers the Internal Revenue Code enacted by Congress.`,
    hero: {
      heading: `IRS NEWS`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/uequations`,
      },
      {
        name: `github`,
        url: `https://github.com/uequations`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/uequations`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/uequations/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

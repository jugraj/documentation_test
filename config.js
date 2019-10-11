const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://learn.hasura.io",
    gaTrackingId: null
  },
  header: {
    logo:
      "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
    logoLink: "https://learn.hasura.io",
    title: "10x Banking",
    githubUrl: "https://github.com/jugraj/documentation_test",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock", "/step-up"],
    links: [{ text: "Hasura", link: "https://hasura.io" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Gatsby Gitbook Boilerplate | Hasura",
    description: "Documentation built with mdx. Powering learn.hasura.io ",
    ogImage: null,
    docsLocation:
      "https://github.com/jugraj/documentation_test/blob/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  }
};

module.exports = config;

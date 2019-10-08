module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `q5pi73rk26ss`,
        accessToken: `CuqHO-IaP4CA6N-hKeaRSV25KqVCESvzrJxJC6GHHqo`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/state/createStore',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: 'BJI7EFTZSF',
        apiKey: '8b669f0ccad27b266831fda14655edd3',
        indexName: 'aspiring-engineer',
        chunkSize: 10000,
        queries: [
          {
            query: `{
              allContentfulArticle(sort: { order: DESC, fields: createdAt }) {
                nodes {
                  id
                  title
                  content {
                    content
                  }
                  category {
                    name
                  }
                  createNumber
                  createdAt
                }
              }
            }`,
            transformer: ({ data }) =>
              data.allContentfulArticle.nodes.map(article => {
                return {
                  id: article.id,
                  title: article.title,
                  content: article.content.content,
                  createNumber: article.createNumber,
                  category: article.category.map(cate => cate.name),
                  createdAt: article.createdAt,
                }
              }),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

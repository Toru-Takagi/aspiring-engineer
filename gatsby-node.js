const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query AllContentfulArticleQuery {
      allContentfulArticle(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            title
            metaDescription
            content {
              content
              childMarkdownRemark {
                html
              }
            }
            createNumber
            createdAt
            category {
              name
            }
            coverImage {
              sizes(maxWidth: 1280) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  data.allContentfulArticle.edges.map(edge => {
    createPage({
      path: `/article/${edge.node.createNumber}`,
      component: path.resolve('./src/templates/Article.tsx'),
      context: {
        data: edge.node,
      },
    })
  })
}

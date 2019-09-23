const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query AllContentfulArticleQuery {
      allContentfulArticle(sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            title
            id
            createdAt
            createNumber
            content {
              content
              childMarkdownRemark {
                html
              }
            }
            category {
              name
            }
          }
        }
      }
    }
  `)
  data.allContentfulArticle.edges.map(edge => {
    createPage({
      path: `/article/${ edge.node.createNumber }`,
      component: path.resolve('./src/templates/article.js'),
      context: {
        data: edge.node,
      }
    })
  })
}
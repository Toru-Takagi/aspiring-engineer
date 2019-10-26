import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  filename: string
}

export default (props: Props): React.ReactElement => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  sizes(maxWidth: 800) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find((n: any) => {
          return n.node.relativePath.includes(props.filename)
        })

        if (!image) return

        const imageSizes = image.node.childImageSharp.sizes
        return <Img sizes={imageSizes} />
      }}
    />
  )
}

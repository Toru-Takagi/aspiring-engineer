import { FluidObject } from 'gatsby-image'

export interface IAllContentfulArticle {
  allContentfulArticle: {
    nodes: IArticle[]
  }
}

export interface IArticle {
  id: string
  title: string
  content: {
    content: string
  }
  createNumber: number
  createdAt: string
  coverImage: {
    sizes: FluidObject
  }
  sizes: FluidObject
}

export interface IArticleAndCategory {
  id: string
  title: string
  content: {
    content: string
    childMarkdownRemark: {
      html: string
    }
  }
  createNumber: string
  createdAt: string
  category: {
    name: string
  }[]
  coverImage: {
    sizes: FluidObject
  }
}

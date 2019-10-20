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
  createNumber: string
  createdAt: string
  coverImage: {
    sizes: FluidObject
  }
  sizes: FluidObject
}

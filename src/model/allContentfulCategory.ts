export interface IAllContentfulCategory {
  allContentfulCategory: {
    nodes: ICategory[]
  }
}

export interface ICategory {
  name: string
  article: {
    id: number
  }[]
}

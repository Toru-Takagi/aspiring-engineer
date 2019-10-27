import { IArticle } from '../model/allContentfulArticle'

export interface IState {
  likeMap: Map<string, ILikeMapValue>
  articleList: IArticle[]
  toggleFlag: boolean
}

export interface ILikeMapValue {
  createNumber: string
  title: string
}

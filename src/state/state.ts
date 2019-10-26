import { IArticle } from '../model/allContentfulArticle'

export interface IState {
  likeMap: Map<string, ILikeMapValue> | undefined
  articleList: IArticle[] | undefined
  toggleFlag: boolean | undefined
}

export interface ILikeMapValue {
  createNumber: string
  title: string
}

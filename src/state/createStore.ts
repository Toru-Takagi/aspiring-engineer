import { createStore, StoreEnhancer } from 'redux'

import { IState, ILikeMapValue } from './state'
import { IArticle } from '../model/allContentfulArticle'

export interface IAction {
  type: 'SET_LIKE_MAP' | 'SET_ARTICLE_LIST' | 'SET_TOGGLE_FLAG'
  likeFlag?: boolean
  likeMap?: Map<string, ILikeMapValue>
  createNumber?: string
  title?: string
  articleList?: IArticle[]
  toggleFlag?: boolean
}

const initialState: IState = {
  likeMap: new Map(),
  articleList: [],
  toggleFlag: true,
}

/**
 * actionの中身によって、storeの中身を変更して、storeを返すメソッド
 * @param state
 * @param action
 */
const reducer: (state: IState | undefined, action: IAction) => IState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'SET_LIKE_MAP':
      return {
        ...state,
        likeMap:
          action.likeMap !== undefined ? action.likeMap : initialState.likeMap,
      }
    case 'SET_ARTICLE_LIST':
      return {
        ...state,
        articleList:
          action.articleList !== undefined
            ? action.articleList
            : initialState.articleList,
      }
    case 'SET_TOGGLE_FLAG':
      return {
        ...state,
        toggleFlag:
          action.toggleFlag !== undefined
            ? action.toggleFlag
            : initialState.toggleFlag,
      }
    default:
      return state
  }
}

// preloadedState will be passed in by the plugin
export default (preloadedState?: StoreEnhancer) => {
  return createStore(reducer, preloadedState)
}

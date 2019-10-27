import * as React from 'react'
import { useSelector } from 'react-redux'

import { ILikeMapValue, IState } from '../state/state'
import { IAction } from '../state/createStore'

export interface ILikeMap {
  clickLike: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const useLikeMap: (
  dispatch: React.Dispatch<IAction>
) => [Map<string, ILikeMapValue>, ILikeMap] = dispatch => {
  // お気に入りの記事情報を取得
  const likeMap: Map<string, ILikeMapValue> = useSelector(
    (state: IState) => state.likeMap,
    () => false
  )

  /**
   * 初回読み込み時に、ブラウザの保存されているお気に入り記事情報をStoreに格納する
   */
  React.useEffect(() => {
    // ブラウザに保存されているお気に入りにした記事情報を取得
    const likeObject: string | null = localStorage.getItem('likeObject')

    // 取得したお気に入り記事情報をStoreに格納
    dispatch({
      type: 'SET_LIKE_MAP',
      likeMap: new Map(
        Object.entries(JSON.parse(likeObject === null ? '{}' : likeObject))
      ),
    })
  }, [dispatch])

  /**
   * Likeアイコンを押下した際に、Storeに好きな記事の情報を格納する
   * @param e
   */
  const clickLike: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void = e => {
    // 記事のcreateNumberを取得
    const createNumberVal: string | null = e.currentTarget.getAttribute(
      'data-create-number'
    )
    // 記事のtitleを取得
    const titleVal: string | null = e.currentTarget.getAttribute('data-title')
    // 記事がお気に入り記事であるかのフラグを取得
    const likeFlag: boolean =
      e.currentTarget.getAttribute('data-like') === 'true'

    // お気に入りの記事の場合、一覧から削除し、お気に入りじゃない場合、一覧に追加
    if (createNumberVal !== null && titleVal !== null) {
      likeFlag
        ? likeMap.delete(createNumberVal)
        : likeMap.set(createNumberVal, {
            createNumber: createNumberVal,
            title: titleVal,
          })
    }

    // ブラウザに保存するようのオブジェクトを生成に整形
    const likeObject: { [key: string]: ILikeMapValue } = {}
    likeMap.forEach((value: ILikeMapValue, key: string) => {
      likeObject[key] = value
    })

    // ブラウザにお気に入りの記事情報を保存する
    localStorage.setItem('likeObject', JSON.stringify(likeObject))

    // お気に入りの記事情報をStoreに格納
    dispatch({
      type: 'SET_LIKE_MAP',
      likeMap: likeMap,
    })

    e.preventDefault()
  }

  return [likeMap, { clickLike }]
}

import { useEffect, Dispatch } from 'react'
import { useSelector } from 'react-redux'

import { IState } from '../state/state'
import { IAction } from '../state/createStore'

export interface IToggleFlag {
  toggle: () => void
}

export const useToggleFlag: (
  dispatch: Dispatch<IAction>
) => [boolean | undefined, IToggleFlag] = dispatch => {
  // StoreからtoggleFlagを取得
  const toggleFlag: boolean | undefined = useSelector(
    (state: IState) => state.toggleFlag
  )

  // 初回読み込み時に呼び出される
  useEffect(() => {
    console.log('useToggleFlag')
    // ブラウザに保存されているフッターの開閉状態を取得
    const flag: boolean =
      localStorage.getItem('toggleFlag') === 'true' ? true : false

    // ブラウザから取得した開閉状態をStoreに格納
    dispatch({
      type: 'SET_TOGGLE_FLAG',
      toggleFlag: flag,
    })
  }, [])

  // 開閉状態を変更するメソッド
  const toggle: () => void = () => {
    const flag: boolean = !toggleFlag
    localStorage.setItem('toggleFlag', String(flag))
    dispatch({
      type: 'SET_TOGGLE_FLAG',
      toggleFlag: flag,
    })
  }

  return [toggleFlag, { toggle }]
}

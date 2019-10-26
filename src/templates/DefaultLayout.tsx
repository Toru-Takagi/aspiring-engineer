import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as PropTypes from 'prop-types'

import { IState } from '../state/state'

import Footer from '../components/organisms/Footer'

import '../scss/default-layout.scss'

interface IProps {
  children: PropTypes.ReactNodeLike
}

const Layout: (props: IProps) => React.ReactElement = props => {
  // レイアウトの中に描画するHTMLを保持
  const { children } = props

  // Storeの中身を変更するdispatchを保持
  const dispatch: React.Dispatch<any> = useDispatch()

  // フッターの開閉状態を保持する
  const toggleFlag: boolean = useSelector((state: IState) => state.toggleFlag)

  /**
   * ブラウザに保存されているフッターの開閉状態に格納するメソッド
   */
  const initToggleFlag: () => void = React.useCallback(() => {
    // ブラウザに保存されているフッターの開閉状態を取得
    const flag: boolean =
      localStorage.getItem('toggleFlag') === 'true' ? true : false

    // ブラウザから取得した開閉状態をStoreに格納
    dispatch({
      type: 'SET_TOGGLE_FLAG',
      toggleFlag: flag,
    })
  }, [dispatch])

  /**
   * ブラウザに保存されているお気に入り記事情報をStoreに格納するメソッド
   */
  const initLikeMap: () => void = React.useCallback(() => {
    // ブラウザに保存されているお気に入りした記事情報を取得
    const likeObject: string | null = localStorage.getItem('likeObject')

    // 取得したお気に理記事情報をStoreに格納
    dispatch({
      type: 'SET_LIKE_MAP',
      likeMap: new Map(
        Object.entries(JSON.parse(likeObject === null ? '{}' : likeObject))
      ),
    })
  }, [dispatch])

  // コンポーネント読み込み時に呼び出される
  React.useEffect(() => {
    initToggleFlag()
    initLikeMap()
  }, [initToggleFlag, initLikeMap])

  // デフォルトのレイアウトを描画する
  return (
    <div id='default-layout'>
      <main className={toggleFlag ? '' : 'footer-open'}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

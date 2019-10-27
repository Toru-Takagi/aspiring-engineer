import * as React from 'react'
import { useDispatch } from 'react-redux'
import * as PropTypes from 'prop-types'

import { useToggleFlag, IToggleFlag } from '../modules/useToggleFlag'

import Footer from '../components/organisms/Footer'

import '../scss/default-layout.scss'

interface IProps {
  children: PropTypes.ReactNodeLike
}

const Layout: (props: IProps) => React.ReactElement = props => {
  // レイアウトの中に描画するHTMLを保持
  const { children } = props

  // フッターの開閉状態を保持する
  const [toggleFlag]: [boolean, IToggleFlag] = useToggleFlag(useDispatch())

  // デフォルトのレイアウトを描画する
  return (
    <div id='default-layout'>
      <main className={toggleFlag ? '' : 'footer-open'}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

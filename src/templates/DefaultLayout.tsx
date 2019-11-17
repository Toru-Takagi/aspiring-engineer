import * as React from 'react'
import { useDispatch } from 'react-redux'
import * as PropTypes from 'prop-types'
import { css, SerializedStyles } from '@emotion/core'

import { useToggleFlag, IToggleFlag } from '../modules/useToggleFlag'
import CssProperties from '../mixins/cssProperties'

import Footer from '../components/organisms/Footer'

import '../scss/reset.scss'

interface IProps {
  children: PropTypes.ReactNodeLike
}

const Layout: (props: IProps) => React.ReactElement = props => {
  // レイアウトの中に描画するHTMLを保持
  const { children } = props

  // フッターの開閉状態を保持する
  const [toggleFlag]: [boolean, IToggleFlag] = useToggleFlag(useDispatch())

  const defaultLayout: SerializedStyles = css({
    position: 'relative',
    padding: '20px 20px 0 20px',
    [CssProperties.mediaQuery.isSp]: {
      padding: '10px 10px 0 10px',
    },
    '> main': {
      position: 'relative',
      borderRadius: '15px',
      overflow: 'hidden',
      width: '100%',
      backgroundColor: CssProperties.colors.mainColor,
      zIndex: 1,
    },
  })

  // デフォルトのレイアウトを描画する
  return (
    <div css={defaultLayout}>
      <main className={toggleFlag ? '' : 'footer-open'}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

import * as React from 'react'
import { useDispatch } from 'react-redux'
import * as PropTypes from 'prop-types'
import { Global, css, SerializedStyles } from '@emotion/core'

import { useToggleFlag, IToggleFlag } from '../modules/useToggleFlag'
import CssProperties from '../mixins/cssProperties'

import Footer from '../components/organisms/Footer'

interface IProps {
  children: PropTypes.ReactNodeLike
}

const Layout: (props: IProps) => React.ReactElement = props => {
  // レイアウトの中に描画するHTMLを保持
  const { children } = props

  // フッターの開閉状態を保持する
  const [toggleFlag]: [boolean, IToggleFlag] = useToggleFlag(useDispatch())

  const resetStyle: SerializedStyles = css({
    'html, body': {
      position: 'relative',
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100%',
      backgroundColor: CssProperties.colors.subColor,
      fontFamily: `'M PLUS Rounded 1c', 'Noto Sans JP', 'Kosugi Maru'`,
      fontSize: '14px',
      overflow: 'hidden',
      [CssProperties.mediaQuery.isSp]: {
        fontSize: '12px',
      },
    },
    div: {
      position: 'relative',
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
    },
    span: {
      margin: 0,
      padding: 0,
    },
    'a, p': {
      color: '#000',
      textDecoration: 'none',
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
      padding: 0,
      fontSize: '1rem',
    },
    li: {
      listStyleType: 'none',
      height: 'auto',
    },
    '::placeholder': {
      fontFamily: `'M PLUS Rounded 1c', 'Noto Sans JP', 'Kosugi Maru'`,
      color: CssProperties.colors.white,
    },
    '::-webkit-scrollbar': {
      width: '10px',
      background: CssProperties.colors.scrollBar.backgroundColor,
      opacity: '0.1',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      width: '8px',
      borderRadius: '8px',
      backgroundColor: CssProperties.colors.accentColor,
    },
  })

  const defaultLayout: SerializedStyles = css({
    position: 'relative',
    padding: '20px 20px 0 20px',
    [CssProperties.mediaQuery.isSp]: {
      padding: '10px 10px 0 10px',
    },
    '> main': {
      position: 'relative',
      borderRadius: '15px',
      width: '100%',
      height: 'calc(100% - 87px)',
      overflow: 'hidden',
      backgroundColor: CssProperties.colors.mainColor,
      backfaceVisibility: 'hidden',
      zIndex: 1,
      transition: '1s',
      willChange: 'height',
      [CssProperties.mediaQuery.isSp]: {
        height: 'calc(100% - 80px)',
      },
      '&.footer-open': {
        height: `calc(100% - ${CssProperties.footer.openHeight.pc})`,
        [CssProperties.mediaQuery.isTablet]: {
          height: `calc(100% - ${CssProperties.footer.openHeight.sp})`,
        },
      },
    },
  })

  // デフォルトのレイアウトを描画する
  return (
    <div css={defaultLayout}>
      <Global styles={resetStyle} />
      <main className={toggleFlag ? '' : 'footer-open'}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

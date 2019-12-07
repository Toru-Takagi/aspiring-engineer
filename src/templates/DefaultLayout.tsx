import * as React from 'react'
import { useDispatch } from 'react-redux'
import * as PropTypes from 'prop-types'
import { Global, css, SerializedStyles, keyframes } from '@emotion/core'

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
    'span, p': {
      margin: 0,
      padding: 0,
    },
    a: {
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
    input: {
      outline: 'none',
      width: '100%',
      height: '100%',
      fontSize: '1.3rem',
      '&:hover': {
        outline: 'none',
      },
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

  const transitionAnimation = keyframes`
    0% {
      transform: translateY(0)
    }
    30% {
      transfrom: translateY(-100vh)
    }
    40% {
      transform: translateY(-100vh)
    }
    100% {
      transform: translateY(-200vh)
    }
  `

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
    '.transition-animation': {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 10000,
      width: '100vw',
      height: '100vh',
      animation: `${transitionAnimation} 1.5s 0.8s`,
      animationTimingFunction: 'cubic-bezier(.51,0,.53,1)',
      animationFillMode: 'forwards',
      willChange: 'transform',
      '.first-cover': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10001,
        backgroundColor: CssProperties.colors.mainColor,
      },
      '.second-cover': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10002,
        transform: 'translateY(100vh)',
        backgroundColor: CssProperties.colors.subColor,
      },
    },
  })

  // デフォルトのレイアウトを描画する
  return (
    <div css={defaultLayout}>
      <Global styles={resetStyle} />
      <div className='transition-animation'>
        <div className='first-cover'></div>
        <div className='second-cover'></div>
      </div>
      <main className={toggleFlag ? '' : 'footer-open'}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

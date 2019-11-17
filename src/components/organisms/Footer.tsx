import * as React from 'react'
import { useDispatch } from 'react-redux'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

import ProfileArea from '../molecules/ProfileArea'
import CategoryArea from '../molecules/CategoryArea'
import LikeArticleArea from '../molecules/LikeArticleArea'
import ArrowIcon from '../atoms/icons/ArrowIcon'

import { useToggleFlag, IToggleFlag } from '../../modules/useToggleFlag'

export default (): React.ReactElement => {
  // toggleボタンの開閉状態を保持するフラグを格納
  const [toggleFlag, { toggle }]: [boolean, IToggleFlag] = useToggleFlag(
    useDispatch()
  )

  const footerStyle: SerializedStyles = css({
    position: 'relative',
    width: '100%',
    height: CssProperties.footer.openHeight.pc,
    fontSize: '1.2rem',
    [CssProperties.mediaQuery.isTablet]: {
      height: CssProperties.footer.openHeight.sp,
    },
    '.reverse': {
      transform: 'rotateX(180deg)',
    },
    '.toggle-button': {
      position: 'absolute',
      top: CssProperties.footer.toggleButton.top,
      left: 0,
      right: 0,
      margin: 'auto',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: CssProperties.footer.toggleButton.size,
      height: CssProperties.footer.toggleButton.size,
      backgroundColor: CssProperties.colors.accentColor,
      zIndex: 100,
      transition: '1s',
      willChange: 'transform',
      [CssProperties.mediaQuery.isSp]: {
        width: '60px',
        height: '60px',
      },
      '&:hover': {
        cursor: 'pointer',
      },
      svg: {
        width: '40px',
        height: '40px',
        color: CssProperties.colors.white,
      },
    },
    '#footer-background': {
      position: 'absolute',
      bottom: 0,
      borderRadius: '30px 30px 0 0',
      height: `calc(100% - ${CssProperties.footer.toggleButton.top} - ${CssProperties.footer.toggleButton.size} / 2)`,
      backgroundColor: CssProperties.colors.mainColor,
      overflow: 'hidden',
      '#footer-container': {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '37px 35px 10px 35px',
        [CssProperties.mediaQuery.isSp]: {
          paddingLeft: '5px',
          paddingRight: '5px',
          overflowY: 'scroll',
        },
        '.sub-title': {
          color: CssProperties.colors.white,
          height: '20px',
          fontWeight: 'bold',
        },
      },
    },
  })

  // ページのフッターを描画
  return (
    <footer css={footerStyle}>
      <div
        className={'toggle-button' + (toggleFlag ? ' reverse' : '')}
        onClick={toggle}
      >
        <ArrowIcon />
      </div>
      <div id='footer-background'>
        <div id='footer-container'>
          <ProfileArea />
          <CategoryArea />
          <LikeArticleArea />
        </div>
      </div>
    </footer>
  )
}

import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'gatsby'
import { css, SerializedStyles } from '@emotion/core'

import { ILikeMapValue } from '../../state/state'
import { useLikeMap, ILikeMap } from '../../modules/useLikeMap'
import CssProperties from '../../mixins/cssProperties'

import HomeIcon from '../atoms/icons/HomeIcon'
import LikeIcon from '../atoms/icons/LikeIcon'
import NotLikeIcon from '../atoms/icons/NotLikeIcon'
import TwitterIcon from '../atoms/icons/TwitterIcon'
import HatenaBookmarkIcon from '../atoms/icons/HatenaBookmarkIcon'

interface IProps {
  createNumber: string
  title: string
}

export default (props: IProps): React.ReactElement => {
  // お気に入りの記事情報を格納
  const [likeMap, { clickLike }]: [
    Map<string, ILikeMapValue>,
    ILikeMap
  ] = useLikeMap(useDispatch())

  const menuBarStyle: SerializedStyles = css({
    backgroundColor: CssProperties.accentColor,
    height: 'auto',
    '> div': {
      margin: '0 auto',
      padding: '5px',
      display: 'flex',
      justifyContent: 'space-around',
      width: '980px',
      color: CssProperties.white,
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: '1.5rem',
      [CssProperties.isSp]: {
        width: '100%',
      },
      a: {
        color: CssProperties.white,
      },
      '.menu-bar-item': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 'auto',
        cursor: 'pointer',
        [CssProperties.isSp]: {
          fontSize: '1rem',
        },
        svg: {
          height: '25px',
          fill: CssProperties.white,
          [CssProperties.isSp]: {
            height: '17px',
          },
        },
      },
    },
  })

  // 記事詳細ページのメニューバーを描画
  return (
    <div css={menuBarStyle}>
      <div id='menu-bar'>
        <Link to='/'>
          <div className='menu-bar-item'>
            <HomeIcon />
            <span>Home</span>
          </div>
        </Link>
        <div
          className='menu-bar-item'
          data-like={
            likeMap.get(props.createNumber) !== undefined ? true : false
          }
          data-title={props.title}
          data-create-number={props.createNumber}
          onClick={clickLike}
        >
          {likeMap.get(props.createNumber) !== undefined ? (
            <LikeIcon />
          ) : (
            <NotLikeIcon />
          )}
          <span>Like</span>
        </div>
        <div className='menu-bar-item'>
          <TwitterIcon />
          <span>Twitter</span>
        </div>
        <div className='menu-bar-item'>
          <HatenaBookmarkIcon />
          <span>Hatena</span>
        </div>
      </div>
    </div>
  )
}

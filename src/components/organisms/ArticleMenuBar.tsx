import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'gatsby'

import { ILikeMapValue } from '../../state/state'
import { useLikeMap, ILikeMap } from '../../modules/useLikeMap'

import HomeIcon from '../atoms/icons/HomeIcon'
import LikeIcon from '../atoms/icons/LikeIcon'
import NotLikeIcon from '../atoms/icons/NotLikeIcon'
import TwitterIcon from '../atoms/icons/TwitterIcon'
import HatenaBookmarkIcon from '../atoms/icons/HatenaBookmarkIcon'

import '../../scss/article-menu-bar.scss'

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

  // 記事詳細ページのメニューバーを描画
  return (
    <div id='menu-bar-bg'>
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
        <div className='menu-bar-item twitter-icon'>
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

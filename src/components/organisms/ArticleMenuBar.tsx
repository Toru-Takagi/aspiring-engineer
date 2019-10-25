import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'gatsby'

import { ILikeMapValue, IState } from '../../state/state'

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

export default (props: IProps) => {
  const dispatch: React.Dispatch<any> = useDispatch()
  const likeMap: Map<string, ILikeMapValue> = useSelector(
    (state: IState) => state.likeMap,
    () => false
  )
  const clickLike: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch({
      type: 'CLICK_LIKE',
      likeFlag: e.currentTarget.getAttribute('data-like') === 'true',
      likeMap: likeMap,
      createNumber: props.createNumber,
      title: props.title,
    })
  }
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

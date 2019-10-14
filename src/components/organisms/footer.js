import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProfileArea from '../molecules/profileArea'
import CategoryArea from '../molecules/categoryArea'
import LikeArticleArea from '../molecules/likeArticleArea'
import ArrowIcon from '../atoms/icons/arrowIcon'

import '../../scss/footer.scss'

export default () => {
  const dispatch = useDispatch()
  const toggleFlag = useSelector(state => state.toggleFlag, [])
  const toggle = () => {
    let flag = !toggleFlag
    localStorage.setItem('toggleFlag', flag)
    dispatch({
      type: 'SET_TOGGLE_FLAG',
      toggleFlag: flag,
    })
  }

  return (
    <footer>
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

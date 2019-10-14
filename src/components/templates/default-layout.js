import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import ProfileArea from '../molecules/profile-area'
import CategoryArea from '../molecules/category-area'
import LikeArticleArea from '../molecules/like-article-area'
import ArrowIcon from '../atoms/icons/arrowIcon'

import '../../scss/default-layout.scss'

const Layout = props => {
  const { children } = props
  const toggleFlag = useSelector(state => state.toggleFlag, [])
  const dispatch = useDispatch()
  const toggle = () => {
    let flag = !toggleFlag
    localStorage.setItem('toggleFlag', flag)
    dispatch({
      type: 'SET_TOGGLE_FLAG',
      toggleFlag: flag,
    })
  }
  const initToggleFlag = useCallback(() => {
    let flag = localStorage.getItem('toggleFlag') === 'true' ? true : false
    dispatch({
      type: 'SET_TOGGLE_FLAG',
      toggleFlag: flag,
    })
  }, [dispatch])
  const initLikeMap = useCallback(() => {
    let likeObject = localStorage.getItem('likeObject')
    dispatch({
      type: 'SET_LIKE_MAP',
      likeMap: new Map(
        Object.entries(JSON.parse(likeObject === null ? '{}' : likeObject))
      ),
    })
  }, [dispatch])
  useEffect(() => {
    initToggleFlag()
    initLikeMap()
  }, [initToggleFlag, initLikeMap])
  return (
    <div id='default-layout'>
      <main className={toggleFlag ? '' : 'footer-open'}>{children}</main>
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
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

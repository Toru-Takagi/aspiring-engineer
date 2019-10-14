import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import PropTypes from 'prop-types'
import ProfileArea from '../molecules/profile-area'
import CategoryArea from '../molecules/category-area'
import LikeArticleArea from '../molecules/like-article-area'
import ArrowIcon from '../atoms/icons/arrowIcon'

import '../../scss/default-layout.scss'

const Layout = props => {
  const { children } = props
  const [toggleFlag, setToggleFlag] = useState(true)
  const dispatch = useDispatch()
  const toggle = () => {
    let flag = !toggleFlag
    localStorage.setItem('toggleFlag', flag)
    setToggleFlag(flag)
  }
  const initToggleFlag = () => {
    let flag = localStorage.getItem('toggleFlag') === 'true' ? true : false
    setToggleFlag(flag)
  }
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
  }, [initLikeMap])
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

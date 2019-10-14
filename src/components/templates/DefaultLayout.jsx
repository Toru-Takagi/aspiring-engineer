import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Footer from '../organisms/Footer'

import '../../scss/default-layout.scss'

const Layout = props => {
  const { children } = props
  const dispatch = useDispatch()
  const toggleFlag = useSelector(state => state.toggleFlag, [])
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
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

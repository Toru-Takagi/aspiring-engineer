import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'

import PropTypes from 'prop-types'
import ProfileArea from '../molecules/profile-area'
import CategoryArea from '../molecules/category-area'
import ArrowIcon from '../atoms/icons/arrowIcon'

import scssVar from '../../scss/default-layout.scss'

const Layout = props => {
  const { children } = props
  const [toggleFlag, setToggleFlag] = useState(true)
  const likeMap = useSelector(state => state.likeMap, [])
  const dispatch = useDispatch()
  const toggle = () => {
    let flag = !toggleFlag
    localStorage.setItem('toggleFlag', flag)
    setToggleFlag(flag)
  }
  useEffect(() => {
    let flag = localStorage.getItem('toggleFlag') === 'true' ? true : false
    setToggleFlag(flag)

    dispatch({
      type: 'SET_LIKE_MAP',
      likeMap: new Map(
        Object.entries(JSON.parse(localStorage.getItem('likeObject')))
      ),
    })
  }, [dispatch])
  return (
    <div id='default-layout'>
      <main className={toggleFlag ? '' : 'footer-open'}>{children}</main>
      <footer>
        <div
          className={'toggle-button' + (toggleFlag ? ' reverse' : '')}
          onClick={toggle}
        >
          <ArrowIcon iconColor={scssVar.white} size='40px' />
        </div>
        <div id='footer-background'>
          <div id='footer-container'>
            <ProfileArea />
            <CategoryArea />
            <div id='like-article-area'>
              <span className='sub-title'>お気に入り</span>
              <ul>
                {Array.from(likeMap.keys()).map(key => {
                  return (
                    <Link to={`/article/${key}`} key={key}>
                      <li>{likeMap.get(key).title}</li>
                    </Link>
                  )
                })}
              </ul>
            </div>
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

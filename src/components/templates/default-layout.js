import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'

import PropTypes from 'prop-types'
import CategoryArea from '../molecules/category-area'
import Image from '../atoms/gatsbyImage'
import ArrowIcon from '../atoms/icons/arrowIcon'
import TwitterIcon from '../atoms/icons/twitterIcon'
import NoteIcon from '../atoms/icons/noteIcon'
import MailIcon from '../atoms/icons/mailIcon'

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
            <div id='profile-area'>
              <div id='profile'>
                <div className='user-icon'>
                  <Image filename='user-icon.png' />
                </div>
                <span className='profile-name'>Toru Takagi</span>
              </div>
              <div className='sns-area'>
                <ul>
                  <li className='twitter'>
                    <TwitterIcon
                      iconColor={scssVar.twitterColor}
                      size={scssVar.snsIconSize}
                    />
                    <span>Twitter</span>
                  </li>
                  <li className='qiita'>
                    <div>
                      <Image filename='qiita-square.png' />
                    </div>
                    <span>Qiita</span>
                  </li>
                  <li className='note'>
                    <NoteIcon
                      backgroundColor={scssVar.noteColor}
                      iconColor='#FFFFFF'
                      size={scssVar.snsIconSize}
                    />
                    <span>note</span>
                  </li>
                  <li className='mail'>
                    <MailIcon
                      iconColor={scssVar.white}
                      size={scssVar.snsIconSize}
                    />
                    <span>mail</span>
                  </li>
                </ul>
              </div>
            </div>
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

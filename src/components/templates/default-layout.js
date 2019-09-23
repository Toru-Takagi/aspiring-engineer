import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CategoryArea from '../molecules/category-area'
import Image from '../atoms/gatsbyImage'
import ArrowIcon from '../atoms/icons/arrowIcon'
import TwitterIcon from '../atoms/icons/twitterIcon'
import NoteIcon from '../atoms/icons/noteIcon'
import MailIcon from '../atoms/icons/mailIcon'

import scssVar from '../../scss/default-layout.scss'

const Layout = (props) => {
  const { children } = props
  const [footerHeight, setFooterHeight] = useState(225)
  const [toggleFlag, setToggleFlag] = useState(true)
  const mainStyle = {
    height: 'calc(100% - ' + footerHeight + 'px)'
  }
  const footerStyle = {
    height: footerHeight + 'px'
  }
  const toggle = () => {
    setFooterHeight(toggleFlag ? 87 : 225)
    setToggleFlag(!toggleFlag)
  }
  return (
    <div id='default-layout'>
      <main style={ mainStyle }>{children}</main>
      <footer style={ footerStyle }>
        <div className={ 'toggle-button' + ' ' + (toggleFlag ? '' : 'reverse') } onClick={ toggle }>
          <ArrowIcon iconColor={ scssVar.white } size='40px' />
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
                    <TwitterIcon iconColor={ scssVar.twitterColor } size={ scssVar.snsIconSize} />
                    <span>Twitter</span>
                  </li>
                  <li className='qiita'>
                    <div>
                      <Image filename='qiita-square.png' />
                    </div>
                    <span>Qiita</span>
                  </li>
                  <li className='note'>
                    <NoteIcon backgroundColor={ scssVar.noteColor } iconColor='#FFFFFF' size={ scssVar.snsIconSize } />
                    <span>note</span>
                  </li>
                  <li className='mail'>
                    <MailIcon iconColor={ scssVar.white } size={ scssVar.snsIconSize } />
                    <span>mail</span>
                  </li>
                </ul>
              </div>
            </div>
            <CategoryArea />
            <div id='like-article-area'>
              <span className='sub-title'>お気に入り</span>
              <ul>
                <li>IT研修でVuePress+Express+Nuxt on Dockerでシステムを作成した話</li>
                <li>JSのフレームワークを知らない人間がVue.jsを2ヵ月触ってみたって話</li>
                <li>Nuxt.js＋Firebase Cloud Messaging(FCM)を使ったPWA化が簡単で衝撃的だった</li>
                <li>MAMP3.5.1 Apache couldn't be started.</li>
                <li>Eclipseを使ってSelenium-WebDriverを使ってみた</li>
                <li>pyinstallerで躓いたところ～Pythonコードをexe化～</li>
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
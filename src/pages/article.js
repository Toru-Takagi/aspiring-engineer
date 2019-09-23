import React from 'react'

import Layout from '../components/templates/default-layout'
import Image from '../components/atoms/gatsbyImage'
import Tag from '../components/atoms/tag'
import HomeIcon from '../components/atoms/icons/homeIcon'
import LikeIcon from '../components/atoms/icons/likeIcon'
import TwitterIcon from '../components/atoms/icons/twitterIcon'
import HatenaBookmarkIcon from '../components/atoms/icons/hatenaBookmarkIcon'

import scssVar from '../scss/article.scss'

export default () => {
  return (
    <Layout>
      <div id='article'>
        <header>
          <Image filename='header' />
          <div class='article-title-area'>
            <h1 class='article-title'>Nuxt.js＋Firebase Cloud Messaging(FCM)を使ったPWA化が簡単で衝撃的だった</h1>
            <span class='date'>2019/08/09</span>
          </div>
        </header>
        <div id='menu-bar-bg'>
          <div id='menu-bar'>
            <div className='menu-bar-item'>
              <HomeIcon color={ scssVar.white } />
              <span>Home</span>
            </div>
            <div className='menu-bar-item'>
              <LikeIcon color={ scssVar.white } />
              <span>Like</span>
            </div>
            <div className='menu-bar-item'>
              <TwitterIcon color={ scssVar.white } />
              <span>Twitter</span>
            </div>
            <div className='menu-bar-item'>
              <HatenaBookmarkIcon />
              <span>Hatena</span>
            </div>
          </div>
        </div>
        <div className='article-main'>
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ<br />
          あああああああああああああああああああああああああああああああああああああああああ<br />
        </div>
        <div className='tag-area'>
          <span><Tag itemName='Docker' bgColor='#3D3D3D' color='#CA3E47' /></span>
          <span><Tag itemName='Nuxt.js' bgColor='#3D3D3D' color='#CA3E47' /></span>
          <span><Tag itemName='Vue.js' bgColor='#3D3D3D' color='#CA3E47' /></span>
        </div>
      </div>
    </Layout>
  )
}
import React from 'react'

import Layout from '../components/template/default-layout'
import Image from '../components/atoms/gatsbyImage'
import AspiringEngineer from '../components/atoms/aspiringEngineer'
import SearchIcon from '../components/atoms/icons/searchIcon'
import LikeIcon from '../components/atoms/icons/likeIcon'
import NotLikeIcon from '../components/atoms/icons/notLikeIcon'
import './index.scss'

export default () => (
  <Layout>
    <div>
      <header>
        <Image filename='header' />
        <AspiringEngineer />
      </header>
      <div id='search-area'>
        <input type='text' placeholder='記事を検索'></input>
        <SearchIcon />
      </div>
      <div id='article-area'>
        <article>
          <Image filename='header' />
          <h1>IT研修でVuePress+Express+Nuxt on Dockerでシステムを作成した話</h1>
          <div class='article-tag'>2019/08/09</div>
          <LikeIcon />
        </article>
        <article>
          <Image filename='header' />
          <h1>Nuxt.js＋Firebase Cloud Messaging(FCM)を使ったPWA化が簡単で衝撃的だった</h1>
          <div class='article-tag'>2019/08/09</div>
          <NotLikeIcon />
        </article>
        <article>
          <Image filename='header' />
          <h1>JSのフレームワークを知らない人間がVue.jsを2ヵ月触ってみたって話</h1>
          <div class='article-tag'>2019/08/09</div>
          <LikeIcon />
        </article>
      </div>
    </div>
  </Layout>
)
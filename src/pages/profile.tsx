import * as React from 'react'
import { Link } from 'gatsby'
import { css, SerializedStyles } from '@emotion/core'
import Helmet from 'react-helmet'

import CssProperties from '../mixins/cssProperties'

import DefaultLayout from '../templates/DefaultLayout'
import Profile from '../components/molecules/Profile'
import Qualifications from '../components/molecules/Qualifications'
import ExperienceArea from '../components/molecules/ExperienceArea'
import Image from '../components/atoms/GatsbyImage'
import ProfileSVG from '../components/atoms/ProfileSVG'

export default () => {
  // URLの取得
  const url: string = typeof window !== 'undefined' ? window.location.href : ''

  // rootのエレメント参照
  const rootRef: React.RefObject<HTMLDivElement> = React.createRef()

  // スクロール情報
  const [scrollInfo, setScrollInfo]: [
    { mainHeight: number; scrollTop: number },
    React.Dispatch<{ mainHeight: number; scrollTop: number }>
  ] = React.useState<{ mainHeight: number; scrollTop: number }>({
    mainHeight: 0,
    scrollTop: 0,
  })

  // スクロールイベント
  const scroll: (e: React.UIEvent<HTMLDivElement>) => void = e => {
    setScrollInfo({
      mainHeight: rootRef.current != null ? rootRef.current.clientHeight : 0,
      scrollTop: e.currentTarget.scrollTop,
    })
  }

  const profileLayout: SerializedStyles = css({
    'a > header': {
      width: '100%',
      height: '150px',
      position: 'relative',
      [CssProperties.mediaQuery.isSp]: {
        height: CssProperties.header.height.sp,
      },
      img: {
        objectPosition: 'center 20% !important',
      },
      '> svg': {
        boxSizing: 'border-box',
        margin: '0 auto',
        padding: '10px 0',
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    '> .profile-area': {
      margin: '20px auto 10px auto',
      padding: '20px 10px',
      maxWidth: '980px',
      height: 'calc(100% - 150px - 20px - 10px)',
      overflow: 'auto',
      color: CssProperties.colors.white,
      [CssProperties.mediaQuery.isSp]: {
        height: 'calc(100% - 130px)',
      },
      a: {
        margin: '0 5px',
        color: CssProperties.colors.twitterColor,
        fontWeight: 'bold',
        textDecoration: 'underline',
        transition: '0.4s',
        '&:hover': {
          color: CssProperties.colors.subColor,
        },
      },
      dl: {
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gridGap: '10px 10px',
        margin: '10px',
        dt: { alignSelf: 'center' },
        dd: {
          margin: 0,
          alignItems: 'center',
          'a:first-of-type': {
            marginLeft: 0,
          },
        },
      },
      h2: {
        fontSize: '1.6rem',
      },
    },
  })

  return (
    <DefaultLayout>
      <div ref={rootRef} css={profileLayout}>
        <Helmet>
          <title>高木徹とは？</title>
          <meta
            name='description'
            content='エンジニアの卵である僕についてのプロフィールです。'
          />
          <meta property='og:url' content={url} />
          <meta property='og:title' content='高木徹のプロフィール' />
          <meta
            property='og:description'
            content='エンジニアの卵である僕についてのプロフィールです。'
          />
          <meta
            property='og:image'
            content='https://drive.google.com/uc?export=view&id=1SadUHcKpFlbnQN4xTNn7KgnljvSh2RlX'
          />
          <meta property='og:type' content='blog' />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:site_name' content='エンジニアの卵の成長日記' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@TTrpbm' />
        </Helmet>
        <Link to='/'>
          <header>
            <Image filename='profile' />
            <ProfileSVG />
          </header>
        </Link>
        <div onScroll={scroll} className='profile-area'>
          <Profile />
          <Qualifications />
          <ExperienceArea scrollInfo={scrollInfo} />
        </div>
      </div>
    </DefaultLayout>
  )
}

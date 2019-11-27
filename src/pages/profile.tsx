import * as React from 'react'
import { Link } from 'gatsby'
import { css, SerializedStyles } from '@emotion/core'
import Helmet from 'react-helmet'

import CssProperties from '../mixins/cssProperties'

import DefaultLayout from '../templates/DefaultLayout'
import Profile from '../components/molecules/Profile'
import Qualifications from '../components/molecules/Qualifications'
import Experience from '../components/molecules/Experience'
import Image from '../components/atoms/GatsbyImage'
import ProfileSVG from '../components/atoms/ProfileSVG'

export default () => {
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
      <div css={profileLayout}>
        <Helmet>
          <title>高木徹とは？</title>
          <meta
            name='description'
            content='エンジニアの卵である僕についてのプロフィールです。'
          />
        </Helmet>
        <Link to='/'>
          <header>
            <Image filename='profile' />
            <ProfileSVG />
          </header>
        </Link>
        <div className='profile-area'>
          <Profile />
          <Qualifications />
          <Experience />
        </div>
      </div>
    </DefaultLayout>
  )
}

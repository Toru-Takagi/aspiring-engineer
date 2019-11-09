import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

import Image from '../atoms/GatsbyImage'
import TwitterIcon from '../atoms/icons/TwitterIcon'
import NoteIcon from '../atoms/icons/NoteIcon'
import MailIcon from '../atoms/icons/MailIcon'

export default (): React.ReactElement => {
  const profileAreaStyle: SerializedStyles = css({
    display: 'flex',
    padding: CssProperties.footerContentsBasicPadding,
    width: CssProperties.profileAreaSize,
    height: CssProperties.footerContentsBasicHeight,
    [CssProperties.isTablet]: {
      marginTop: CssProperties.footerContentsBasicMarginTop,
    },
    '.profile': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: CssProperties.profileIconSize,
      color: CssProperties.white,
      '.user-icon': {
        width: CssProperties.profileIconSize,
        height: CssProperties.profileIconSize,
        img: {
          borderRadius: '15px',
        },
      },
    },
    '.sns-area': {
      marginLeft: '30px',
      ul: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        li: {
          display: 'flex',
          span: {
            marginLeft: '8px',
            height: CssProperties.snsIconSize.height,
          },
          svg: {
            width: CssProperties.snsIconSize.width,
            height: CssProperties.snsIconSize.height,
          },
          '&.twitter': {
            svg: {
              fill: CssProperties.twitterColor,
            },
            span: {
              color: CssProperties.twitterColor,
            },
          },
          '&.qiita': {
            div: {
              width: CssProperties.snsIconSize.width,
            },
            span: {
              color: CssProperties.qiitaColor,
            },
          },
          '&.note': {
            span: {
              color: CssProperties.noteColor,
            },
          },
          '&.mail': {
            svg: {
              fill: CssProperties.white,
            },
            span: {
              color: CssProperties.white,
            },
          },
        },
      },
    },
  })

  // プロフィール情報を描画
  return (
    <div css={profileAreaStyle}>
      <div className='profile'>
        <div className='user-icon'>
          <Image filename='user-icon.png' />
        </div>
        <span>Toru Takagi</span>
      </div>
      <div className='sns-area'>
        <ul>
          <a
            href='https://twitter.com/TTrpbm'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li className='twitter'>
              <TwitterIcon />
              <span>Twitter</span>
            </li>
          </a>
          <a
            href='https://qiita.com/TakagiToru'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li className='qiita'>
              <div>
                <Image filename='qiita-square.png' />
              </div>
              <span>Qiita</span>
            </li>
          </a>
          <a
            href='https://note.mu/toru_takagi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li className='note'>
              <NoteIcon />
              <span>note</span>
            </li>
          </a>
          <a href='mailto:kurowasi2525@gmail.com'>
            <li className='mail'>
              <MailIcon />
              <span>mail</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

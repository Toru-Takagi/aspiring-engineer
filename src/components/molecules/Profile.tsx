import * as React from 'react'
import { Link } from 'gatsby'
import { css, SerializedStyles } from '@emotion/core'

import { transitionShowAnimation } from '../../modules/animation'

export default () => {
  const profileStyle: SerializedStyles = css({
    width: 'auto',
    height: 'auto',
    opacity: 0,
    transform: 'translateY(50px)',
    animation: `${transitionShowAnimation} 1s 1s`,
    animationFillMode: 'forwards',
  })

  return (
    <div css={profileStyle}>
      <h2>Profile</h2>
      <dl>
        <dt>名前</dt>
        <dd>高木 徹(Takagi Toru)</dd>
        <dt>性別</dt>
        <dd>男</dd>
        <dt>年齢</dt>
        <dd>20代前半</dd>
        <dt>SNS</dt>
        <dd>
          <Link to='/'>技術ブログ</Link> /
          <a href='https://twitter.com/TTrpbm' target='_blank'>
            Twitter
          </a>{' '}
          /{' '}
          <a href='http://qiita.com/Kurowasi' target='_blank'>
            Qiita
          </a>{' '}
          /
          <a href='http://kurowasi2525.hatenablog.com/' target='_blank'>
            はてなブログ
          </a>{' '}
          /{' '}
          <a href='https://note.mu/toru_takagi' target='_blank'>
            note
          </a>{' '}
          /{' '}
          <a href='mailto:kurowasi2525@gmail.com' target='_blank'>
            Mail
          </a>{' '}
          /{' '}
          <a href='https://github.com/Kurowasi' target='_blank'>
            GitHub
          </a>
        </dd>
      </dl>
    </div>
  )
}

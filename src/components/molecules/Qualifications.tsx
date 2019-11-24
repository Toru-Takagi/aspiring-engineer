import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import { transitionShowAnimation } from '../../modules/animation'

export default () => {
  const qualificationsStyle: SerializedStyles = css({
    marginTop: '50px',
    width: 'auto',
    height: 'auto',
    opacity: 0,
    transform: 'translateY(50px)',
    animation: `${transitionShowAnimation} 1s 1.5s`,
    animationFillMode: 'forwards',
  })

  return (
    <div css={qualificationsStyle}>
      <h2>Qualifications</h2>
      <dl>
        <dt>フロント</dt>
        <dd>
          HTML / Pug / CSS / SCSS / Stylus / JavaScript / TypeScript / Vue.js /
          Nuxt.js / VuePress / Vuetify / React / Gatsby / Riot / jQuery
        </dd>
        <dt>バックエンド</dt>
        <dd>
          Node.js / Express / Java / PHP / Laravel / CakePHP / FuelPHP /
          WordPress / Python / C / DxLib / VisualBasic
        </dd>
        <dt>アプリ</dt>
        <dd>Flutter</dd>
        <dt>データベース</dt>
        <dd>
          MySQL / PostgreSQL / Firestore / Microsft SQL Server / Oracle SQL /
          Algolia
        </dd>
        <dt>インフラ</dt>
        <dd>
          CentOS / Debian / Windows / MacOS / AWS EC2 / Firebase / さくらVPS /
          Netlify
        </dd>
        <dt>バージョン管理</dt>
        <dd>Git / SVN / CVS</dd>
        <dt>ツール</dt>
        <dd>Visual Studio Code / Slack / Figma</dd>
      </dl>
    </div>
  )
}

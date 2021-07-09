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
          HTML / Pug / CSS / SCSS / Stylus / AdminLTE / JavaScript / TypeScript
          / Vue.js / Nuxt.js / VuePress / Vuetify / React / Gatsby / Next.js /
          Riot / jQuery
        </dd>
        <dt>バックエンド</dt>
        <dd>
          Go / Node.js / Express / Java / PHP / Laravel / CakePHP / FuelPHP /
          WordPress / Ruby / Ruby on Rails / Python / C / DxLib / VisualBasic
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
          Docker / CentOS / Debian / Windows / MacOS / AWS / Firebase /
          さくらVPS / Netlify / Vercel / CircleCI / Wercker / GitHub Actions
        </dd>
        <dt>その他</dt>
        <dd>Selenium / OOP / AOP / ImageMagick / FFMPEG</dd>
        <dt>バージョン管理</dt>
        <dd>Git / SVN / CVS</dd>
        <dt>ツール</dt>
        <dd>
          Visual Studio Code / Eclipse / Sublime Text3 / Visual Studio / XCode /
          Android Studio / Slack / Figma / Jira / Backlog
        </dd>
        <dt>資格</dt>
        <dd>
          Bachelor of Engineering / Oracle Java Programmer Silver SE8 / HTML5
          Professional Certification Level.1 / JSTQB Foundation Level
        </dd>
      </dl>
    </div>
  )
}

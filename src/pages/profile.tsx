import * as React from 'react'
import { Link } from 'gatsby'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../mixins/cssProperties'

import DefaultLayout from '../templates/DefaultLayout'
import Image from '../components/atoms/GatsbyImage'
import ToruTakagi from '../components/atoms/ToruTakagi'

export default () => {
  const profileLayout: SerializedStyles = css({
    'a > header': {
      width: '100%',
      height: '150px',
      position: 'relative',
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
      dl: {
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gridGap: '10px 10px',
        margin: '10px',
        dt: { alignSelf: 'center' },
        dd: {
          margin: 0,
          alignItems: 'center',
        },
      },
      h2: {
        fontSize: '1.6rem',
      },
      ul: {
        paddingLeft: '100px',
        li: {
          position: 'relative',
          borderLeft: `3px solid ${CssProperties.colors.white}`,
          padding: '20px 10px',
          height: '40px',
          '&::before': {
            content: "''",
            display: 'block',
            margin: 'auto 0',
            border: `2px solid ${CssProperties.colors.white}`,
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '-12px',
            backgroundColor: CssProperties.colors.subColor,
          },
          '> div': {
            position: 'absolute',
            width: '80px',
            left: '-100px',
            textAlign: 'right',
            '> span': {
              '&:last-of-type': {
                color: 'rgba(255, 255, 255, 0.5)',
              },
            },
          },
          '> span': {
            marginLeft: '5px',
            lineHeight: '40px',
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
        },
      },
    },
  })

  return (
    <DefaultLayout>
      <div css={profileLayout}>
        <Link to='/'>
          <header>
            <Image filename='profile' />
            <ToruTakagi />
          </header>
        </Link>
        <div className='profile-area'>
          <h2>Qualifications</h2>
          <dl>
            <dt>フロント</dt>
            <dd>
              HTML / Pug / CSS / SCSS / Stylus / JavaScript / TypeScript /
              Vue.js / Nuxt.js / VuePress / Vuetify / React / Gatsby / Riot /
              jQuery
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
              MySQL / PostgreSQL / Firestore / Microsft SQL Server / Oracle SQL
              / Algolia
            </dd>
            <dt>インフラ</dt>
            <dd>
              CentOS / Debian / Windows / MacOS / AWS EC2 / Firebase / さくらVPS
              / Netlify
            </dd>
            <dt>バージョン管理</dt>
            <dd>Git / SVN /CVS</dd>
            <dt>ツール</dt>
            <dd>Visual Studio Code / Slack / Figma</dd>
          </dl>
          <h2>Experience</h2>
          <ul>
            <li>
              <div>
                <span>2008-12</span>
                <br />
                <span>中学1年</span>
              </div>
              <span>ドラマ BLOODY MONDAY を見てエンジニアに興味を持つ</span>
            </li>
            <li>
              <div>
                <span>2012-08</span>
                <br />
                <span>高校3年</span>
              </div>
              <span>
                ドラマ リッチマン・プアウーマン
                を見てエンジニアになることを決心する
              </span>
            </li>
            <li>
              <div>
                <span>2014-04</span>
                <br />
                <span>大学1年</span>
              </div>
              <span>埼玉にある大学の工学部 情報工学科に入学</span>
            </li>
            <li>
              <div>
                <span>2014-11</span>
                <br />
                <span>大学1年</span>
              </div>
              <span>
                ティロ・フィナーレ加川さんの
                <a href='http://tfkhp.com' target='_blank'>
                  公式サイト
                </a>
                (現ファンクラブサイト)を公開する
              </span>
            </li>
            <li>
              <div>
                <span>2016-08</span> <br />
                <span>大学3年</span>
              </div>
              <span>
                小学校の同窓会で再会した旧友の会社で数日間Webエンジニアとして参加
              </span>
            </li>
            <li>
              <div>
                <span>2016-10</span> <br />
                <span>大学3年</span>
              </div>
              <span>
                渋谷のWeb系ベンチャーで、PHPエンジニアとしてアルバイトを開始
              </span>
            </li>
            <li>
              <div>
                <span>2017-02</span>
                <br />
                <span>大学4年</span>
              </div>
              <span>
                一部上場の自社開発している会社で、内定者アルバイトとして開始
              </span>
            </li>
            <li>
              <div>
                <span>2017-04</span>
                <br />
                <span>大学4年</span>
              </div>
              <span>渋谷のWeb系ベンチャーのアルバイトを辞める</span>
            </li>
            <li>
              <div>
                <span>2018-02</span>
                <br />
                <span>大学4年</span>
              </div>
              <span>
                仮想通貨のポートフォリオアプリ
                <a href='https://docheck.kurowasi.com' target='_blank'>
                  DoCheck(非公開)
                </a>
                を公開
              </span>
            </li>
            <li>
              <div>
                <span>2018-03</span>
                <br />
                <span>大学4年</span>
              </div>
              <span>
                信用を元にした仮想割り勘アプリ
                <a href='https://viro.kurowasi.com' target='_blank'>
                  VIRO
                </a>
                を公開
              </span>
            </li>
            <li>
              <div>
                <span>2018-03</span>
                <br />
                <span>大学4年</span>
              </div>
              <span>埼玉にある大学を卒業する</span>
            </li>
            <li>
              <div>
                <span>2018-04</span>
                <br />
                <span>社会人1年</span>
              </div>
              <span>一部上場の自社開発している会社に入社</span>
            </li>
            <li>
              <div>
                <span>2019-01</span>
                <br />
                <span>社会人1年</span>
              </div>
              <span>研究開発部に異動になる</span>
            </li>
          </ul>
        </div>
      </div>
    </DefaultLayout>
  )
}

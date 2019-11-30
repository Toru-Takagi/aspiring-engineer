import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import { transitionShowAnimation } from '../../modules/animation'

import CssProperties from '../../mixins/cssProperties'

export default () => {
  const experienceStyle: SerializedStyles = css({
    marginTop: '50px',
    opacity: 0,
    transform: 'translateY(50px)',
    animation: `${transitionShowAnimation} 1s 2s`,
    animationFillMode: 'forwards',
    ul: {
      paddingLeft: '150px',
      [CssProperties.mediaQuery.isSp]: {
        paddingLeft: '140px',
      },
      li: {
        position: 'relative',
        borderLeft: `3px solid ${CssProperties.colors.white}`,
        padding: '40px 10px',
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
          width: '130px',
          left: '-150px',
          textAlign: 'right',
          [CssProperties.mediaQuery.isSp]: {
            width: '120px',
            left: '-140px',
          },
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
      },
    },
  })

  return (
    <div css={experienceStyle}>
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
            ドラマ リッチマン・プアウーマン を見てエンジニアになることを決心する
          </span>
        </li>
        <li>
          <div>
            <span>2014-04~2018-03</span>
            <br />
            <span>大学1年</span>
          </div>
          <span>埼玉にある大学の工学部 情報工学科に入学/卒業する</span>
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
            <span>2016-10~2017-04</span>
            <br />
            <span>大学3年</span>
          </div>
          <span>
            渋谷のWeb系ベンチャーで、PHPエンジニアとしてアルバイトを開始
          </span>
        </li>
        <li>
          <div>
            <span>2017-02~2018-04</span>
            <br />
            <span>大学4年</span>
          </div>
          <span>
            一部上場の自社開発している会社で、内定者アルバイトとして開始
          </span>
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
            <span>2018-04~</span>
            <br />
            <span>社会人1年</span>
          </div>
          <span>一部上場の自社開発している会社に入社</span>
        </li>
        <li>
          <div>
            <span>2018-09~2019-12</span>
            <br />
            <span>社会人1年</span>
          </div>
          <span>
            友達の会社で副業として、Pythonを利用してWeb自動化のお手伝い開始
          </span>
        </li>
        <li>
          <div>
            <span>2019-01~2019-07</span>
            <br />
            <span>社会人1年</span>
          </div>
          <span>
            研究開発部に異動になり、中小企業向けプロダクトのプログラマーとして、要件定義/デザイン/設計/開発を行う
          </span>
        </li>
        <li>
          <div>
            <span>2019-07~</span>
            <br />
            <span>社会人2年</span>
          </div>
          <span>
            新規プロダクトのプロジェクトに配属され、新規プロダクトの要件定義/デザインのフォローと新規プロダクト周りの2製品の企画を行う
          </span>
        </li>
      </ul>
    </div>
  )
}

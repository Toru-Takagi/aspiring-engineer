import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

import Experience from './Experience'

interface IProps {
  scrollInfo: {
    mainHeight: number
    scrollTop: number
  }
}

export default (props: IProps) => {
  const experienceStyle: SerializedStyles = css({
    marginTop: '50px',
    animationFillMode: 'forwards',
    ul: {
      paddingLeft: '150px',
      [CssProperties.mediaQuery.isSp]: {
        paddingLeft: '140px',
      },
    },
  })

  return (
    <div css={experienceStyle}>
      <h2>Experience</h2>
      <ul>
        <Experience
          year='2008-12'
          schoolYear='中学1年'
          scrollInfo={props.scrollInfo}
        >
          <span>ドラマ BLOODY MONDAY を見てエンジニアに興味を持つ</span>
        </Experience>
        <Experience
          year='2012-08'
          schoolYear='高校3年'
          scrollInfo={props.scrollInfo}
        >
          <span>
            ドラマ リッチマン・プアウーマン を見てエンジニアになることを決心する
          </span>
        </Experience>
        <Experience
          year='2014-04~2018-03'
          schoolYear='大学1年'
          scrollInfo={props.scrollInfo}
        >
          <span>埼玉にある大学の工学部 情報工学科に入学/卒業する</span>
        </Experience>
        <Experience
          year='2014-11'
          schoolYear='大学1年'
          scrollInfo={props.scrollInfo}
        >
          <span>
            ティロ・フィナーレ加川さんの
            <a href='http://tfkhp.com' target='_blank'>
              公式サイト
            </a>
            (現ファンクラブサイト)を公開する
          </span>
        </Experience>
        <Experience
          year='2016-08'
          schoolYear='大学3年'
          scrollInfo={props.scrollInfo}
        >
          <span>
            小学校の同窓会で再会した友達Aの会社でWebエンジニアとして参加
          </span>
        </Experience>
        <Experience
          year='2016-10~2017-04'
          schoolYear='大学3年'
          scrollInfo={props.scrollInfo}
        >
          <span>
            渋谷のWeb系ベンチャーで、PHPエンジニアとしてアルバイトを開始
          </span>
        </Experience>
        <Experience
          year='2017-02~2018-04'
          schoolYear='大学4年'
          scrollInfo={props.scrollInfo}
        >
          <span>
            一部上場の自社開発している会社で、内定者アルバイトとして開始
          </span>
        </Experience>
        <Experience
          year='2018-02'
          schoolYear='大学4年'
          scrollInfo={props.scrollInfo}
        >
          <span>
            仮想通貨のポートフォリオアプリ
            {/* <a href='https://docheck.kurowasi.com' target='_blank'> */}
            <a
              href='https://twitter.com/TTrpbm/status/961914140888465409?s=20'
              target='_blank'
            >
              DoCheck(非公開)
            </a>
            を公開
          </span>
        </Experience>
        <Experience
          year='2018-03'
          schoolYear='大学4年'
          scrollInfo={props.scrollInfo}
        >
          <span>
            信用を元にした仮想割り勘アプリ
            <a href='https://viro.kurowasi.com' target='_blank'>
              VIRO
            </a>
            を公開
          </span>
        </Experience>
        <Experience
          year='2018-04~'
          schoolYear='社会人1年(1社目)'
          scrollInfo={props.scrollInfo}
        >
          <span>一部上場の自社開発している会社に入社</span>
        </Experience>
        <Experience
          year='2018-09~2019-12'
          schoolYear='社会人1年(1社目)'
          scrollInfo={props.scrollInfo}
        >
          <span>
            友達Bの会社で副業として、Pythonを利用してWeb自動化のお手伝い開始
          </span>
        </Experience>
        <Experience
          year='2019-01~2019-07'
          schoolYear='社会人1年(1社目)'
          scrollInfo={props.scrollInfo}
        >
          <span>
            研究開発部に異動になり、中小企業向けプロダクトのプログラマーとして、要件定義/デザイン/設計/開発を行う
          </span>
        </Experience>
        <Experience
          year='2019-07~2020-01'
          schoolYear='社会人2年(1社目)'
          scrollInfo={props.scrollInfo}
        >
          <span>
            新規プロダクトのプロジェクトに配属され、新規プロダクトの要件定義/デザインのフォローと新規プロダクトのヘルプシステムの企画を行う
          </span>
        </Experience>
        <Experience
          year='2020-o1~2020-10'
          schoolYear='社会人2年(1社目)'
          scrollInfo={props.scrollInfo}
        >
          <span>
            新規プロダクトの決済システムで技術スタックの選定(Next.js+Golang)、開発基盤の作成から開発まで行う
            <br />
            ※プロジェクト遅延により、旧システムの改修へと方向転換あり
          </span>
        </Experience>
        <Experience
          year='2020-10~'
          schoolYear='社会人3年(2社目)'
          scrollInfo={props.scrollInfo}
        >
          <span>
            友達Aの会社に転職し、新規プロダクトの初期開発メンバーとして参画
            <br />
            ※役職：Senior Technical Director
          </span>
        </Experience>
        <Experience
          year='2021-02'
          schoolYear='社会人3年(2社目)'
          scrollInfo={props.scrollInfo}
        >
          <span>
            友達と遊ぶハードルを下げる、日程調整ツール
            <a href='https://togello.toru-takagi.dev/' target='_blank'>
              Togello (Web)
            </a>
            を公開
          </span>
        </Experience>
      </ul>
    </div>
  )
}

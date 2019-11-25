import * as React from 'react'
import { useSelector } from 'react-redux'
import { css, SerializedStyles } from '@emotion/core'

import { IArticle } from '../../model/allContentfulArticle'
import { showAnimation } from '../../modules/animation'
import { IState } from '../../state/state'
import CssProperties from '../../mixins/cssProperties'

import ArticleCard from '../../components/molecules/ArticleCard'

interface IProps {
  onScroll: (e: React.UIEvent<HTMLElement>) => void
}

export default (props: IProps) => {
  // 記事情報の一覧を格納
  const articleList: IArticle[] = useSelector(
    (state: IState) => state.articleList
  )

  const style: SerializedStyles = css({
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '30px',
    height: 'calc(100% - 100px - 90px)',
    willChange: 'transform',
    transition: CssProperties.on.scroll.transition,
    overflowY: 'scroll',
    [CssProperties.mediaQuery.isSp]: {
      marginTop: '15px',
      height: 'calc(100% - 175px)',
    },
    '.not-found-area': {
      fontSize: '1.2rem',
      color: CssProperties.colors.white,
      textAlign: 'center',
      lineHeight: '2.2rem',
      opacity: 0,
      animation: `${showAnimation} 1s 2s`,
      animationFillMode: 'forwards',
    },
  })

  return (
    <div css={style} onScroll={props.onScroll}>
      {articleList.length === 0 ? (
        <div className='not-found-area'>
          <p>該当の記事は存在しません。</p>
          <p>検索キーワードを変更してください。</p>
        </div>
      ) : (
        articleList.map((article, index) => {
          return <ArticleCard article={article} index={index} key={index} />
        })
      )}
    </div>
  )
}

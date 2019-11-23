import * as React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import { css, SerializedStyles } from '@emotion/core'

import Algolia from '../mixins/algolia'
import CssProperties from '../mixins/cssProperties'
import { IAllContentfulArticle, IArticle } from '../model/allContentfulArticle'
import { IState } from '../state/state'
import { IScrollFlag, useScrollFlag } from '../modules/useScrollFlag'
import { showAnimation } from '../modules/animation'

import Layout from '../templates/DefaultLayout'
import Header from '../components/molecules/Header'
import ScrollTransformArea from '../components/molecules/ScrollTransformArea'
import SearchArea from '../components/molecules/SearchArea'
import ArticleCard from '../components/molecules/ArticleCard'
import AspiringEngineer from '../components/atoms/AspiringEngineer'

export default (): React.ReactElement => {
  // 記事情報をContentfullから取得して格納
  const data: IAllContentfulArticle = useStaticQuery(graphql`
    query IndexQuery {
      allContentfulArticle(sort: { order: DESC, fields: createdAt }) {
        nodes {
          id
          title
          content {
            content
          }
          createNumber
          createdAt
          coverImage {
            sizes(maxWidth: 1280) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  `)

  // 記事情報の一覧を格納
  const articleList: IArticle[] = useSelector(
    (state: IState) => state.articleList
  )

  // Storeの情報を変更するdispatchを格納
  const dispatch: React.Dispatch<any> = useDispatch()

  // 初めて読み込みであるかを判断するフラグを格納
  const [isLoaded, setIsLoaded]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = React.useState<boolean>(false)

  // 初めてスクロールされたかを判断するフラグを格納
  const [scrollFlag, { scroll }]: [boolean, IScrollFlag] = useScrollFlag({
    flag: false,
  })

  // 検索を行った際の遅延検索するメソッドの情報を保持
  let timer: NodeJS.Timeout

  /**
   * 検索Inputを空にして、Top画面に遷移するメソッド
   */
  const clickHeader: () => void = () => {
    const searchInputElm: HTMLInputElement | null = document.querySelector(
      '#search-area input'
    )
    if (searchInputElm !== null) searchInputElm.value = ''
    new Algolia().searchAllAndSetArticleList('', dispatch)
    navigate('/')
  }

  /**
   * 検索するキーワードを取得してAlgoliaで検索するメソッド
   * @param e
   */
  const inputSearchKeyword: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = e => {
    // 検索するキーワード情報を保持
    const value: string = e.currentTarget.value.toString()

    // 既に検索ロジックが動いている場合、その処理を取り消す
    clearTimeout(timer)

    // 0.5秒後にAlgoliaで検索を行う
    timer = setTimeout(() => {
      new Algolia().searchAllAndSetArticleList(value, dispatch)
    }, 500)
  }

  // 読み込み完了時に呼ばれるメソッド
  React.useEffect(() => {
    if (!isLoaded) {
      // 初回表示が完了した状態に変更
      setIsLoaded(true)

      // 記事一覧をStoreに格納
      dispatch({
        type: 'SET_ARTICLE_LIST',
        articleList: data.allContentfulArticle.nodes,
      })

      // URLからGetパラメータ情報を取得し、wordキーの値をAlgoliaで検索する
      window.location.search
        .slice(1)
        .split('&')
        .forEach((parameter: string) => {
          const parameterArray = parameter.split('=')
          const value =
            parameterArray[1] === undefined
              ? ''
              : parameterArray[1].replace('%20', ' ')
          if (parameterArray[0] === 'word') {
            const searchInputElm: HTMLInputElement | null = document.querySelector(
              '#search-area input'
            )
            if (searchInputElm !== null) searchInputElm.value = value
            new Algolia().searchAllAndSetArticleList(value, dispatch)
          }
        })
    }
  }, [isLoaded, dispatch, data.allContentfulArticle.nodes])

  const homeLayout: SerializedStyles = css({
    '#article-area': {
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
    },
  })

  // Topページを描画
  return (
    <Layout>
      <div css={homeLayout}>
        <Header
          imgPath='header'
          titleType='svg'
          scrollFlag={scrollFlag}
          onClick={clickHeader}
        >
          <AspiringEngineer />
        </Header>
        <ScrollTransformArea scrollFlag={scrollFlag}>
          <div>
            <SearchArea onChange={inputSearchKeyword} />
            <div id='article-area' onScroll={scroll}>
              {articleList.length === 0 ? (
                <div className='not-found-area'>
                  <p>該当の記事は存在しません。</p>
                  <p>検索キーワードを変更してください。</p>
                </div>
              ) : (
                articleList.map((article, index) => {
                  return (
                    <ArticleCard article={article} index={index} key={index} />
                  )
                })
              )}
            </div>
          </div>
        </ScrollTransformArea>
      </div>
    </Layout>
  )
}

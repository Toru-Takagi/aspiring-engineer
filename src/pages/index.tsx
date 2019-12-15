import * as React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

import Algolia from '../mixins/algolia'
import { IAllContentfulArticle } from '../model/allContentfulArticle'
import { IScrollFlag, useScrollFlag } from '../modules/useScrollFlag'

import Layout from '../templates/DefaultLayout'
import Header from '../components/molecules/Header'
import ScrollTransformArea from '../components/molecules/ScrollTransformArea'
import ArticleArea from '../components/molecules/ArticleArea'
import SearchArea from '../components/molecules/SearchArea'
import AspiringEngineer from '../components/atoms/AspiringEngineer'
import OpeningAnimation from '../components/atoms/openingAnimation'

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

  // Storeの情報を変更するdispatchを格納
  const dispatch: React.Dispatch<any> = useDispatch()

  // URLの取得
  const url: string = typeof window !== 'undefined' ? window.location.href : ''

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

  // Topページを描画
  return (
    <Layout>
      <div>
        <Helmet>
          <title>エンジニアの卵の成長日記</title>
          <meta
            name='description'
            content='エンジニアの卵である高木徹が、日々得たプログラミングに関する技術を投稿する技術ブログです。'
          />
          <meta property='og:url' content={url} />
          <meta property='og:title' content='エンジニアの卵の成長日記' />
          <meta
            property='og:description'
            content='エンジニアの卵である高木徹が、日々得たプログラミングに関する技術を投稿する技術ブログです。'
          />
          <meta
            property='og:image'
            content='https://drive.google.com/uc?export=view&id=1SadUHcKpFlbnQN4xTNn7KgnljvSh2RlX'
          />
          <meta property='og:type' content='blog' />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:site_name' content='エンジニアの卵の成長日記' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@TTrpbm' />
        </Helmet>
        <OpeningAnimation />
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
            <ArticleArea onScroll={scroll} />
          </div>
        </ScrollTransformArea>
      </div>
    </Layout>
  )
}

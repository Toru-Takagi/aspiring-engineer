import * as React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'

import Algolia from '../mixins/algolia'
import { IAllContentfulArticle, IArticle } from '../model/allContentfulArticle'
import { IState } from '../state/state'
import { IScrollFlag, useScrollFlag } from '../modules/useScrollFlag'

import Layout from '../templates/DefaultLayout'
import ArticleCard from '../components/molecules/ArticleCard'
import Image from '../components/atoms/GatsbyImage'
import AspiringEngineer from '../components/atoms/AspiringEngineer'
import SearchIcon from '../components/atoms/icons/SearchIcon'

import '../scss/index.scss'

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

  /**
   * 記事一覧を遅らせて表示するメソッド
   */
  const showArticle: () => void = () => {
    // 読み込み時から何秒遅らせるかの値を保持
    let time: number = 300

    // 記事一覧の表示をする
    document.querySelectorAll('.article-animation').forEach(elm => {
      setTimeout(() => {
        elm.classList.add('show-animation')
      }, time)
      time += 200
    })
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

  // 初回読み込み時に呼ばれる
  React.useEffect(() => {
    showArticle()
  }, [articleList])

  // Topページを描画
  return (
    <Layout>
      <div id='home' className={scrollFlag ? 'on-scroll' : ''}>
        <header onClick={clickHeader}>
          <Image filename='header' />
          <AspiringEngineer />
        </header>
        <div id='search-area'>
          <input
            type='text'
            placeholder='記事を検索'
            onChange={inputSearchKeyword}
          ></input>
          <SearchIcon />
        </div>
        <div id='article-area' onScroll={scroll}>
          {articleList.length === 0 ? (
            <div className='not-found-area'>
              <p>該当の記事は存在しません。</p>
              <p>検索キーワードを変更してください。</p>
            </div>
          ) : (
            articleList.map((article, index) => {
              return <ArticleCard article={article} key={index} />
            })
          )}
        </div>
      </div>
    </Layout>
  )
}

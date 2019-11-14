import * as React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import { css, SerializedStyles } from '@emotion/core'

import Algolia from '../mixins/algolia'
import CssProperties from '../mixins/cssProperties'
import { IAllContentfulArticle, IArticle } from '../model/allContentfulArticle'
import { IState } from '../state/state'
import { IScrollFlag, useScrollFlag } from '../modules/useScrollFlag'

import Layout from '../templates/DefaultLayout'
import ArticleCard from '../components/molecules/ArticleCard'
import Image from '../components/atoms/GatsbyImage'
import AspiringEngineer from '../components/atoms/AspiringEngineer'
import SearchIcon from '../components/atoms/icons/SearchIcon'

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
    '> header': {
      height: CssProperties.header.height.pc,
      transformOrigin: 'top center',
      willChange: 'transform',
      transition: CssProperties.on.scroll.transition,
      cursor: 'pointer',
      [CssProperties.mediaQuery.isSp]: {
        height: CssProperties.header.height.sp,
      },
      img: {
        objectPosition: 'center 55%',
      },
      svg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        margin: `${CssProperties.header.margin.horizontal} auto`,
        maxWidth: '90%',
        height: `calc(${CssProperties.header.height.pc} - ${CssProperties.header.margin.horizontal} * 2)`,
        willChange: 'transform',
        transition: CssProperties.on.scroll.transition,
        [CssProperties.mediaQuery.isSp]: {
          height: `calc(${CssProperties.header.height.sp} - ${CssProperties.header.margin.horizontal} * 2)`,
        },
      },
    },
    '#search-area': {
      margin: '10px auto 0',
      width: '40%',
      height: '50px',
      willChange: 'transform',
      transition: CssProperties.on.scroll.transition,
      [CssProperties.mediaQuery.isSp]: {
        width: '80%',
      },
      input: {
        boxSizing: 'border-box',
        outline: 'none',
        border: `1px solid ${CssProperties.colors.white}`,
        borderRadius: '5px',
        padding: '0 10px',
        width: '100%',
        height: '100%',
        backgroundColor: CssProperties.colors.mainColor,
        fontSize: '1.3rem',
        color: CssProperties.colors.white,
        '&:hover': {
          outline: 'none',
        },
      },
      svg: {
        boxSizing: 'border-box',
        padding: '10px',
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        color: CssProperties.colors.accentColor,
      },
    },
    '#article-area': {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      marginTop: '30px',
      height: 'calc(100% - 100px - 90px)',
      willChange: 'transform',
      transition: CssProperties.on.scroll.transition,
      overflowY: 'scroll',
      '.not-found-area': {
        fontSize: '1.2rem',
        color: CssProperties.colors.white,
        textAlign: 'center',
        lineHeight: '2.2rem',
        opacity: 0,
        animation: 'showAnimation 1s 2s',
        animationFillMode: 'forwards',
      },
    },
    '&.on-scroll': {
      header: {
        transform: `translateY(calc(-1 * ${CssProperties.scroll.translate.y}))`,
        [CssProperties.mediaQuery.isSp]: {
          transform: 'translate(0)',
        },
        svg: {
          transform: `scale(0.5) translateY(${CssProperties.scroll.translate.y})`,
          [CssProperties.mediaQuery.isSp]: {
            transform: 'scale(1) translate(0)',
          },
        },
      },
      '#search-area': {
        transform: `translateY(calc(-1 * ${CssProperties.scroll.translate.y}))`,
        [CssProperties.mediaQuery.isSp]: {
          transform: 'translate(0)',
        },
      },
      '#article-area': {
        transform: `translateY(calc(-1 * ${CssProperties.scroll.translate.y}))`,
        [CssProperties.mediaQuery.isSp]: {
          transform: 'translate(0)',
        },
      },
    },
  })

  // Topページを描画
  return (
    <Layout>
      <div css={homeLayout} className={scrollFlag ? 'on-scroll' : ''}>
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
              return <ArticleCard article={article} index={index} key={index} />
            })
          )}
        </div>
      </div>
    </Layout>
  )
}

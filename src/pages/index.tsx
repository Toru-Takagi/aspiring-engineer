import * as React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'

import Algolia from '../mixins/algolia'
import { IAllContentfulArticle, IArticle } from '../model/allContentfulArticle'
import { IState } from '../state/state'

import Layout from '../templates/DefaultLayout'
import ArticleCard from '../components/molecules/ArticleCard'
import Image from '../components/atoms/GatsbyImage'
import AspiringEngineer from '../components/atoms/AspiringEngineer'
import SearchIcon from '../components/atoms/icons/SearchIcon'

import '../scss/index.scss'

export default () => {
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
  const articleList: IArticle[] = useSelector(
    (state: IState) => state.articleList
  )
  const dispatch: React.Dispatch<any> = useDispatch()
  const [isLoaded, setIsLoaded]: any[] = React.useState(false)
  const [scrollFlag, setScrollFlag]: any[] = React.useState(false)
  let timer: NodeJS.Timeout
  const clickHeader: () => void = () => {
    const searchInputElm: HTMLInputElement = document.querySelector(
      '#search-area input'
    )
    searchInputElm.value = ''
    new Algolia().searchAllAndSetArticleList('', dispatch)
    navigate('/')
  }
  const scrollArticleArea: (e: React.UIEvent<HTMLDivElement>) => void = (
    e: React.UIEvent<HTMLDivElement>
  ) => {
    const isScrollTop: boolean = e.currentTarget.scrollTop === 0
    if (!isScrollTop && !scrollFlag) {
      setScrollFlag(true)
    }
  }
  const inputSearchKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: string = e.currentTarget.value.toString()
    clearTimeout(timer)
    timer = setTimeout(() => {
      new Algolia().searchAllAndSetArticleList(value, dispatch)
    }, 500)
  }
  const showArticle: () => void = () => {
    let time: number = 300
    document.querySelectorAll('.article-animation').forEach(elm => {
      setTimeout(() => {
        elm.classList.add('show-animation')
      }, time)
      time += 200
    })
  }
  React.useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true)
      dispatch({
        type: 'SET_ARTICLE_LIST',
        articleList: data.allContentfulArticle.nodes,
      })
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
            const searchInputElm: HTMLInputElement = document.querySelector(
              '#search-area input'
            )
            searchInputElm.value = value
            new Algolia().searchAllAndSetArticleList(value, dispatch)
          }
        })
    }
  }, [isLoaded, dispatch, data.allContentfulArticle.nodes])
  React.useEffect(() => {
    showArticle()
  }, [articleList])
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
        <div id='article-area' onScroll={scrollArticleArea}>
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

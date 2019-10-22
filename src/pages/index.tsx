import * as React from 'react'
import { Link, useStaticQuery, graphql, navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import Img from 'gatsby-image'

import Algolia from '../mixins/algolia'
import Converter from '../mixins/converter'
import { IAllContentfulArticle, IArticle } from '../model/allContentfulArticle'
import { IState } from '../state/state'

import Layout from '../templates/DefaultLayout'
import Image from '../components/atoms/GatsbyImage'
import AspiringEngineer from '../components/atoms/AspiringEngineer'
import SearchIcon from '../components/atoms/icons/SearchIcon'
import LikeIcon from '../components/atoms/icons/LikeIcon'
import NotLikeIcon from '../components/atoms/icons/NotLikeIcon'
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
  const likeMap: Map<
    string,
    { createNumber: string; title: string }
  > = useSelector(
    (state: IState) => state.likeMap,
    (
      left: Map<string, { createNumber: string; title: string }>,
      right: Map<string, { createNumber: string; title: string }>
    ) => {
      return false
    }
  )
  const articleList: IArticle[] = useSelector(
    (state: IState) => state.articleList
  )
  const dispatch: React.Dispatch<any> = useDispatch()
  const [isLoaded, setIsLoaded]: any[] = React.useState(false)
  const [scrollFlag, setScrollFlag]: any[] = React.useState(false)
  let timer: NodeJS.Timeout
  const clickLike: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    let createNumber = e.currentTarget.getAttribute('data-create-number')
    let title: string = e.currentTarget.getAttribute('data-title')
    let likeFlag: boolean = e.currentTarget.getAttribute('data-like') === 'true'

    dispatch({
      type: 'CLICK_LIKE',
      likeFlag: likeFlag,
      likeMap: likeMap,
      createNumber: createNumber,
      title: title,
    })
    e.preventDefault()
  }
  const clickHeader: () => void = () => {
    let searchInputElm: HTMLInputElement = document.querySelector(
      '#search-area input'
    )
    searchInputElm.value = ''
    new Algolia().searchAllAndSetArticleList('', dispatch)
    navigate('/')
  }
  const scrollArticleArea: (e: React.UIEvent<HTMLDivElement>) => void = (
    e: React.UIEvent<HTMLDivElement>
  ) => {
    let isScrollTop: boolean = e.currentTarget.scrollTop === 0
    if (!isScrollTop && !scrollFlag) {
      setScrollFlag(true)
    }
  }
  const inputSearchKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value: string = e.currentTarget.value.toString()
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
          let parameterArray = parameter.split('=')
          let value =
            parameterArray[1] === undefined
              ? ''
              : parameterArray[1].replace('%20', ' ')
          if (parameterArray[0] === 'word') {
            let searchInputElm: HTMLInputElement = document.querySelector(
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
              return (
                <div className='article-bg' key={index}>
                  <Link to={`/article/${article.createNumber}`}>
                    <article className='article-animation'>
                      <Img
                        sizes={
                          article.sizes === undefined
                            ? article.coverImage.sizes
                            : article.sizes
                        }
                      />
                      <h1>{article.title}</h1>
                      <div className='article-tag'>
                        {new Converter().changeTimestampToDateString(
                          article.createdAt
                        )}
                      </div>
                      <div
                        className='like-icon-area'
                        data-like={
                          likeMap.get(article.createNumber.toString()) !==
                          undefined
                            ? true
                            : false
                        }
                        data-create-number={article.createNumber}
                        data-title={article.title}
                        onClick={clickLike}
                      >
                        {likeMap.get(article.createNumber.toString()) !==
                        undefined ? (
                          <LikeIcon />
                        ) : (
                          <NotLikeIcon />
                        )}
                      </div>
                    </article>
                  </Link>
                </div>
              )
            })
          )}
        </div>
      </div>
    </Layout>
  )
}

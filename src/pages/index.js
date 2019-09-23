import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/templates/default-layout'
import Image from '../components/atoms/gatsbyImage'
import AspiringEngineer from '../components/atoms/aspiringEngineer'
import SearchIcon from '../components/atoms/icons/searchIcon'
// import LikeIcon from '../components/atoms/icons/likeIcon'
import NotLikeIcon from '../components/atoms/icons/notLikeIcon'
import '../scss/index.scss'

export default () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allContentfulArticle(sort: {order: DESC, fields: createdAt}) {
        nodes {
          id
          title
          content {
            content
          }
          createNumber
          createdAt
        }
      }
    }
  `)
  return (
    <Layout>
      <div id='home'>
        <header>
          <Image filename='header' />
          <AspiringEngineer />
        </header>
        <div id='search-area'>
          <input type='text' placeholder='記事を検索'></input>
          <SearchIcon />
        </div>
        <div id='article-area'>
          {
            data.allContentfulArticle.nodes.map((article, index) => {
              return (
                <div className='article-bg' key={ index }>
                  <Link to={ `/article/${ article.createNumber }` }>
                    <article>
                      <Image filename='header' />
                      <h1>{ article.title }</h1>
                      <div className='article-tag'>
                        {
                          (() => {
                            const date = new Date(article.createdAt)
                            let month = date.getMonth() + 1
                            month = month > 9 ? month : '0' + month
                            const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
                            const result = date.getFullYear() + '/' + month + '/' + day
                            return result
                          })() 
                        }
                      </div>
                      <NotLikeIcon />
                    </article>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}



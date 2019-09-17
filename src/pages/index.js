import React from 'react'

import Layout from '../components/template/default-layout'
import Image from '../components/atoms/gatsbyImage'
import AspiringEngineer from '../components/atoms/aspiringEngineer'
import SearchIcon from '../components/atoms/icons/searchIcon'
import LikeIcon from '../components/atoms/icons/likeIcon'
import NotLikeIcon from '../components/atoms/icons/notLikeIcon'
import './index.scss'

export default (props) => (
  <Layout>
    <div>
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
          props.data.allContentfulArticle.nodes.map((article) => {
            return (
              <article>
                <Image filename='header' />
                <h1>{ article.title }</h1>
                <div class='article-tag'>
                  {
                    (() => {
                      const date = new Date(article.createdAt)
                      let month = date.getMonth() + 1
                      month = month > 9 ? month : '0' + month
                      const day = date.getDay() > 9 ? date.getDay() : '0' + date.getDay()
                      const result = date.getFullYear() + '/' + month + '/' + day
                      return result
                    })() 
                  }
                </div>
                <NotLikeIcon />
              </article>
            )
          })
        }
      </div>
    </div>
  </Layout>
)

export const articleQuery = graphql`
  query MyQuery {
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
`
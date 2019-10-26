import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Converter from '../mixins/converter'
import { IArticleAndCategory } from '../model/allContentfulArticle'

import Layout from './DefaultLayout'
import ArticleMenuBar from '../components/organisms/ArticleMenuBar'
import Tag from '../components/atoms/Tag'

import '../scss/article.scss'
import '../scss/prism.scss'

interface IProps {
  pageContext: {
    data: IArticleAndCategory
  }
}

export default (props: IProps): React.ReactElement => {
  // 記事と紐付くカテゴリー情報を保持する
  const data: IArticleAndCategory = props.pageContext.data

  // 記事詳細ページを描画
  return (
    <Layout>
      <div id='article'>
        <header>
          <Img sizes={data.coverImage.sizes} />
          <div className='article-title-area'>
            <h1 className='article-title'>{data.title}</h1>
            <span className='date'>
              {new Converter().changeTimestampToDateString(data.createdAt)}
            </span>
          </div>
        </header>
        <ArticleMenuBar
          createNumber={String(data.createNumber)}
          title={data.title}
        />
        <div
          className='article-main'
          dangerouslySetInnerHTML={{
            __html: data.content.childMarkdownRemark.html,
          }}
        ></div>
        <div className='tag-area'>
          {data.category.map((category, index) => {
            return (
              <Link to={'/?word=' + category.name} key={index}>
                <Tag
                  itemName={category.name}
                  bgColor='#3D3D3D'
                  color='#CA3E47'
                />
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

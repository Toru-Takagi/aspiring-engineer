import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css, SerializedStyles } from '@emotion/core'
import { Helmet } from 'react-helmet'

import Converter from '../mixins/converter'
import CssProperties from '../mixins/cssProperties'
import { IArticleAndCategory } from '../model/allContentfulArticle'

import Layout from './DefaultLayout'
import ArticleMenuBar from '../components/organisms/ArticleMenuBar'
import Tag from '../components/atoms/Tag'
import ArticleMain from '../components/organisms/ArticleMain'

import '../scss/prism.scss'

interface IProps {
  pageContext: {
    data: IArticleAndCategory
  }
}

export default (props: IProps): React.ReactElement => {
  // 記事と紐付くカテゴリー情報を保持する
  const data: IArticleAndCategory = props.pageContext.data

  // URLの取得
  const url: string = typeof window !== 'undefined' ? window.location.href : ''

  const articleStyle: SerializedStyles = css({
    overflowY: 'auto',
    overflowX: 'hidden',
    header: {
      height: '250px',
      position: 'relative',
      [CssProperties.mediaQuery.isSp]: {
        height: '150px',
      },
      '.article-title-area': {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '20px 100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: CssProperties.colors.white,
        textAlign: 'center',
        backgroundColor: 'rgba(0 , 0, 0, 0.4)',
        [CssProperties.mediaQuery.isTablet]: {
          padding: '10px 50px',
        },
        [CssProperties.mediaQuery.isSp]: {
          padding: '0 10px',
        },
        '.article-title': {
          fontSize: '2.5rem',
          [CssProperties.mediaQuery.isSp]: {
            fontSize: '1.7rem',
          },
        },
        '.date': {
          fontSize: '1.5rem',
        },
      },
    },
    '.tag-area': {
      margin: '0 auto 15px auto',
      width: '980px',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      span: {
        marginLeft: '3px',
        marginRight: '3px',
      },
      [CssProperties.mediaQuery.isPc]: {
        width: '100%',
      },
    },
  })

  // 記事詳細ページを描画
  return (
    <Layout>
      <div css={articleStyle}>
        <Helmet>
          <title>{data.title}</title>
          <meta name='description' content={data.metaDescription} />
          <meta property='og:url' content={url} />
          <meta property='og:title' content={data.title} />
          <meta property='og:description' content={data.metaDescription} />
          <meta
            property='og:image'
            content={`https:${data.coverImage.sizes.src}`}
          />
          <meta property='og:type' content='blog' />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:site_name' content='エンジニアの卵の成長日記' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@TTrpbm' />
        </Helmet>
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
        <ArticleMain html={data.content.childMarkdownRemark.html} />
        <div className='tag-area'>
          {data.category.map((category, index) => {
            return (
              <Link to={'/?word=' + category.name} key={index}>
                <Tag itemName={category.name} />
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

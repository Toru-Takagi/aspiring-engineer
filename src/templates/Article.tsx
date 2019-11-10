import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css, SerializedStyles } from '@emotion/core'

import Converter from '../mixins/converter'
import CssProperties from '../mixins/cssProperties'
import { IArticleAndCategory } from '../model/allContentfulArticle'

import Layout from './DefaultLayout'
import ArticleMenuBar from '../components/organisms/ArticleMenuBar'
import Tag from '../components/atoms/Tag'

import '../scss/prism.scss'

interface IProps {
  pageContext: {
    data: IArticleAndCategory
  }
}

export default (props: IProps): React.ReactElement => {
  // 記事と紐付くカテゴリー情報を保持する
  const data: IArticleAndCategory = props.pageContext.data

  const articleStyle: SerializedStyles = css({
    overflowY: 'auto',
    overflowX: 'hidden',
    header: {
      height: '250px',
      position: 'relative',
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
        '.article-title': {
          fontSize: '2.5rem',
        },
        '.date': {
          fontSize: '1.5rem',
        },
      },
    },
    '.article-main': {
      margin: '0 auto',
      padding: '50px 20px 20px 20px',
      width: '980px',
      height: 'auto',
      color: CssProperties.colors.white,
      h2: {
        margin: '30px 0 20px 0',
        borderLeft: `8px solid ${CssProperties.colors.accentColor}`,
        padding: '5px 0 5px 10px',
        backgroundColor: CssProperties.colors.subColor,
        fontSize: '1.8rem',
        '&:first-of-type': {
          marginTop: 0,
        },
      },
      a: {
        color: CssProperties.colors.twitterColor,
        fontWeight: 'bold',
        textDecoration: 'underline',
        transition: '0.4s',
        '&:hover': {
          color: CssProperties.colors.subColor,
        },
      },
      p: {
        padding: '5px 0 5px 20px',
        lineHeight: '1.5rem',
        fontSize: '1.1rem',
      },
      img: {
        marginTop: '10px',
        borderRadius: '10px',
        maxWidth: '80%',
        boxShadow: '0 0 16px 8px rgba(0, 0, 0, 0.3)',
      },
      strong: {
        color: CssProperties.colors.qiitaColor,
        fontWeight: 'bold',
        fontSize: '1.5rem',
      },
      '.gatsby-highlight': {
        marginBottom: '20px',
      },
      pre: {
        marginLeft: '20px',
        borderRadius: '15px',
        boxShadow: '0 0 16px 8px rgba(0, 0, 0, 0.3)',
      },
      '.twitter-tweet': {
        marginLeft: '20px',
      },
      blockquote: {
        margin: '5px 0 5px 40px',
        borderLeft: `5px solid #8d8d8d`,
      },
      iframe: {
        marginLeft: '40px',
        width: '480px',
        height: '270px',
      },
      ul: {
        marginLeft: '10px',
        li: {
          listStyleType: 'disc',
          padding: '3px 0',
          p: {
            padding: 0,
          },
        },
      },
      ol: {
        marginLeft: '10px',
        li: {
          listStyleType: 'decimal',
          padding: '3px 0 3px 5px',
          p: {
            padding: 0,
          },
        },
      },
      table: {
        margin: '20px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderSpacing: 0,
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.3)',
        th: {
          borderBottom: '2px solid rgba(0, 0, 0, 0.2)',
          padding: '10px',
        },
        td: {
          borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
          padding: '10px',
        },
        tr: {
          '&:last-child': {
            td: {
              borderBottom: 0,
            },
          },
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
    },
    [CssProperties.mediaQuery.isSp]: {
      header: {
        height: '150px',
        '.article-title-area': {
          padding: '0 10px',
          '.article-title': {
            fontSize: '1.7rem',
          },
        },
      },
      '.article-main': {
        width: '100%',
        padding: '15px 10px',
        h2: {
          margin: '15px 0 10px 0',
        },
        iframe: {
          margin: 0,
          width: '100%',
          boxSizing: 'border-box',
        },
        p: {
          paddingLeft: '10px',
        },
        ul: {
          margin: 0,
          paddingLeft: '30px',
        },
        img: {
          maxWidth: '100%',
        },
        pre: {
          marginLeft: '10px',
        },
        '.twitter-tweet': {
          marginLeft: '10px',
          width: 'calc(100% - 10px) !important',
          minWidth: 'auto !important',
        },
      },
    },
  })

  // 記事詳細ページを描画
  return (
    <Layout>
      <div css={articleStyle}>
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
                <Tag itemName={category.name} />
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

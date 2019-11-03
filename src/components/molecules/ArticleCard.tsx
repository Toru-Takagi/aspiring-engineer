import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { StyledComponent } from '@emotion/styled'

import Converter from '../../mixins/converter'
import { IArticle } from '../../model/allContentfulArticle'

import Label from '../atoms/Label'
import LikeOrNotLike from '../molecules/LikeOrNotLike'

import '../../scss/article-card.scss'

interface IProps {
  article: IArticle
}

export default (props: IProps): React.ReactElement => {
  const Title: StyledComponent<any, any, any> = styled.div({
    boxSizing: 'border-box',
    padding: '15px',
    width: '100%',
    height: 'calc(100% - 100px)',
    fontSize: '1.6rem',
    textAlign: 'center',
  })

  // TOPページの記事一覧の記事カードを返す
  return (
    <div className='article-bg'>
      <Link to={`/article/${props.article.createNumber}`}>
        <article className='article-animation'>
          <Img
            sizes={
              props.article.sizes === undefined
                ? props.article.coverImage.sizes
                : props.article.sizes
            }
          />
          <Title>{props.article.title}</Title>
          <Label
            name={new Converter().changeTimestampToDateString(
              props.article.createdAt
            )}
          ></Label>
          <LikeOrNotLike
            createNumber={props.article.createNumber}
            title={props.article.title}
          ></LikeOrNotLike>
        </article>
      </Link>
    </div>
  )
}

import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Converter from '../../mixins/converter'
import { IArticle } from '../../model/allContentfulArticle'

import Label from '../atoms/Label'
import LikeOrNotLike from '../molecules/LikeOrNotLike'

import '../../scss/article-card.scss'

interface IProps {
  article: IArticle
}

export default (props: IProps): React.ReactElement => {
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
          <h1>{props.article.title}</h1>
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

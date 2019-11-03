import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Converter from '../../mixins/converter'
import { IArticle } from '../../model/allContentfulArticle'
import { ILikeMapValue } from '../../state/state'
import { useLikeMap, ILikeMap } from '../../modules/useLikeMap'

import Label from '../atoms/Label'
import LikeIcon from '../atoms/icons/LikeIcon'
import NotLikeIcon from '../atoms/icons/NotLikeIcon'

import '../../scss/article-card.scss'

interface IProps {
  article: IArticle
}

export default (props: IProps): React.ReactElement => {
  // お気に入りの記事情報を取得
  const [likeMap, { clickLike }]: [
    Map<string, ILikeMapValue>,
    ILikeMap
  ] = useLikeMap(useDispatch())

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
          <div
            className='like-icon-area'
            data-like={
              likeMap.get(props.article.createNumber.toString()) !== undefined
                ? true
                : false
            }
            data-create-number={props.article.createNumber}
            data-title={props.article.title}
            onClick={clickLike}
          >
            {likeMap.get(props.article.createNumber.toString()) !==
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
}

import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Converter from '../../mixins/converter'
import { IArticle } from '../../model/allContentfulArticle'
import { IState, ILikeMapValue } from '../../state/state'

import LikeIcon from '../atoms/icons/LikeIcon'
import NotLikeIcon from '../atoms/icons/NotLikeIcon'

import '../../scss/article-card.scss'

interface IProps {
  article: IArticle
}

export default (props: IProps): React.ReactElement => {
  const dispatch: React.Dispatch<any> = useDispatch()
  const likeMap: Map<string, ILikeMapValue> = useSelector(
    (state: IState) => state.likeMap,
    () => false
  )

  /**
   * Likeアイコンを押下した際に、Storeに好きな記事の情報を格納する
   * @param e
   */
  const clickLike: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void = e => {
    const createNumber = e.currentTarget.getAttribute('data-create-number')
    const title: string | null = e.currentTarget.getAttribute('data-title')
    const likeFlag: boolean =
      e.currentTarget.getAttribute('data-like') === 'true'

    dispatch({
      type: 'CLICK_LIKE',
      likeFlag: likeFlag,
      likeMap: likeMap,
      createNumber: createNumber,
      title: title,
    })
    e.preventDefault()
  }

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
          <div className='article-tag'>
            {new Converter().changeTimestampToDateString(
              props.article.createdAt
            )}
          </div>
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

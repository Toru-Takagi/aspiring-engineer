import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css, SerializedStyles } from '@emotion/core'

import Converter from '../../mixins/converter'
import cssProperties from '../../mixins/cssProperties'
import { IArticle } from '../../model/allContentfulArticle'
import useIsShow from '../../modules/useIsShow'

import Label from '../atoms/Label'
import LikeOrNotLike from '../molecules/LikeOrNotLike'

interface IProps {
  article: IArticle
  index: number
}

export default (props: IProps): React.ReactElement => {
  const [isShow]: [boolean] = useIsShow({ timer: props.index * 200 + 300 })

  const articleWrapperStyle: SerializedStyles = css({
    flexBasis: '33%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    a: {
      width: '300px',
    },
    [cssProperties.isPc]: {
      flexBasis: '50%',
    },
    '@media screen and (max-width: 700px)': {
      flexBasis: '100%',
    },
    [cssProperties.isSp]: {
      height: '230px',
      a: {
        width: '230px',
      },
    },
  })

  const articleStyle: SerializedStyles = css({
    borderRadius: '15px',
    width: '300px',
    height: '250px',
    position: 'relative',
    boxShadow: '4px 8px 8px 4px rgba(0, 0, 0, 0.3)',
    transition: '0.2s',
    opacity: 0,
    transform: 'scale(0)',
    willChange: 'opacity, transform',
    backgroundColor: cssProperties.white,
    '&:hover': {
      boxShadow: '8px 16px 8px 4px rgba(0, 0, 0, 0.5)',
    },
    '&.show-animation': {
      animation: 'showAnimation 1s, expansionAnimation 1s',
      animationFillMode: 'forwards',
    },
    '@media screen and (max-width: 480px)': {
      width: '230px',
      height: '200px',
    },
  })

  const imageWrapperStyle: SerializedStyles = css({
    width: '100%',
    height: '100px',
    borderRadius: '15px 15px 0 0',
    overflow: 'hidden',
  })

  const titleStyle: SerializedStyles = css({
    boxSizing: 'border-box',
    padding: '15px',
    width: '100%',
    height: 'calc(100% - 100px)',
    fontSize: '1.6rem',
    textAlign: 'center',
    [cssProperties.isSp]: {
      fontSize: '1.2rem',
    },
  })

  // TOPページの記事一覧の記事カードを返す
  return (
    <div css={articleWrapperStyle}>
      <Link to={`/article/${props.article.createNumber}`}>
        <article css={articleStyle} className={isShow ? 'show-animation' : ''}>
          <div css={imageWrapperStyle}>
            <Img
              sizes={
                props.article.sizes === undefined
                  ? props.article.coverImage.sizes
                  : props.article.sizes
              }
            />
          </div>
          <h1 css={titleStyle}>{props.article.title}</h1>
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

import * as React from 'react'
import { useDispatch } from 'react-redux'
import { css, SerializedStyles } from '@emotion/core'

import { ILikeMapValue } from '../../state/state'
import { ILikeMap, useLikeMap } from '../../modules/useLikeMap'
import CssProperties from '../../mixins/cssProperties'

import LikeIcon from '../atoms/icons/LikeIcon'
import NotLikeIcon from '../atoms/icons/NotLikeIcon'

interface IProps {
  createNumber: number
  title: string
}

export default (props: IProps) => {
  // お気に入りの記事情報を取得
  const [likeMap, { clickLike }]: [
    Map<string, ILikeMapValue>,
    ILikeMap
  ] = useLikeMap(useDispatch())

  const iconContainerStyle: SerializedStyles = css({
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    bottom: '5px',
    right: '10px',
    zIndex: 100,
    svg: {
      height: '30px',
      color: CssProperties.colors.accentColor,
    },
  })

  return (
    <div
      css={iconContainerStyle}
      data-like={
        likeMap.get(props.createNumber.toString()) !== undefined ? true : false
      }
      data-create-number={props.createNumber}
      data-title={props.title}
      onClick={clickLike}
    >
      {likeMap.get(props.createNumber.toString()) !== undefined ? (
        <LikeIcon />
      ) : (
        <NotLikeIcon />
      )}
    </div>
  )
}

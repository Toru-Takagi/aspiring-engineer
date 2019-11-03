import * as React from 'react'
import styled, { StyledComponent } from '@emotion/styled'
import { useDispatch } from 'react-redux'

import { ILikeMapValue } from '../../state/state'
import { ILikeMap, useLikeMap } from '../../modules/useLikeMap'
import cssProperties from '../../mixins/cssProperties'

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

  const IconContainer: StyledComponent<any, any, any> = styled.div`
    width: auto;
    height: auto;
    position: absolute;
    bottom: 5px;
    right: 10px;
    z-index: 100;
    svg {
      height: 30px;
      color: ${cssProperties.accentColor};
    }
  `

  return (
    <IconContainer
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
    </IconContainer>
  )
}

import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

import Image from '../atoms/GatsbyImage'

interface IProps {
  children: React.ReactElement
  imgPath: string
  titleType: 'svg' | 'div'
  scrollFlag: boolean
  onClick: () => void
}

export default (props: IProps) => {
  const headerStyle: SerializedStyles = css({
    height: CssProperties.header.height.pc,
    transformOrigin: 'top center',
    transform: props.scrollFlag
      ? `translateY(calc(-1 * ${CssProperties.scroll.translate.y}))`
      : '',
    willChange: 'transform',
    transition: CssProperties.on.scroll.transition,
    cursor: 'pointer',
    [CssProperties.mediaQuery.isSp]: {
      height: CssProperties.header.height.sp,
      transform: 'translate(0)',
    },
    img: {
      objectPosition: 'center 55% !important',
    },
    svg:
      props.titleType == 'svg'
        ? {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            margin: `${CssProperties.header.margin.horizontal} auto`,
            maxWidth: '90%',
            height: `calc(${CssProperties.header.height.pc} - ${CssProperties.header.margin.horizontal} * 2)`,
            willChange: 'transform',
            transition: CssProperties.on.scroll.transition,
            transform: props.scrollFlag
              ? `scale(0.5) translateY(${CssProperties.scroll.translate.y})`
              : '',
            [CssProperties.mediaQuery.isSp]: {
              height: `calc(${CssProperties.header.height.sp} - ${CssProperties.header.margin.horizontal} * 2)`,
              transform: 'scale(1) translate(0)',
            },
          }
        : {},
  })

  return (
    <header css={headerStyle} onClick={props.onClick}>
      <Image filename={props.imgPath} />
      {props.children}
    </header>
  )
}

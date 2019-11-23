import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

interface IProps {
  children: React.ReactElement
  scrollFlag: boolean
}

export default (props: IProps) => {
  const style: SerializedStyles = css({
    transform: props.scrollFlag
      ? `translateY(calc(-1 * ${CssProperties.scroll.translate.y}))`
      : '',
    willChange: 'transform',
    transition: CssProperties.on.scroll.transition,
    [CssProperties.mediaQuery.isSp]: {
      transform: 'translate(0)',
    },
  })

  return <div css={style}>{props.children}</div>
}

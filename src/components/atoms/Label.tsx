import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

interface IProps {
  name: string
}

export default (props: IProps): React.ReactElement => {
  const labelStyle: SerializedStyles = css({
    width: '80px',
    height: '30px',
    position: 'absolute',
    top: '85px',
    left: '0',
    backgroundColor: CssProperties.accentColor,
    color: CssProperties.white,
    lineHeight: '30px',
    fontSize: '0.9rem',
    textAlign: 'center',
  })
  return <span css={labelStyle}>{props.name}</span>
}

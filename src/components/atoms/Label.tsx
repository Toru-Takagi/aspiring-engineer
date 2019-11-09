import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import cssProperties from '../../mixins/cssProperties'

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
    backgroundColor: cssProperties.accentColor,
    color: cssProperties.white,
    lineHeight: '30px',
    fontSize: '0.9rem',
    textAlign: 'center',
  })
  return <span css={labelStyle}>{props.name}</span>
}

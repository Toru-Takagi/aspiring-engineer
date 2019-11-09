import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

interface IComponentProps {
  itemName: string
}

export default (props: IComponentProps): React.ReactElement => {
  const tagStyle: SerializedStyles = css({
    display: 'inline-block',
    borderRadius: '1rem',
    padding: '0.25rem 0.75rem',
    transition: '0.3s',
    fontSize: '1.1rem',
    backgroundColor: CssProperties.subColor,
    color: CssProperties.accentColor,
    '&:hover': {
      boxShadow: '2px 4px 2px 2px rgba(0, 0, 0, 0.2)',
    },
  })
  return <span css={tagStyle}>{props.itemName}</span>
}

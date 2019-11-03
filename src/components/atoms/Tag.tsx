import * as React from 'react'
import styled, { StyledComponent } from '@emotion/styled'

import cssProperties from '../../mixins/cssProperties'

interface IComponentProps {
  itemName: string
}

export default (props: IComponentProps): React.ReactElement => {
  const Style: StyledComponent<any, any, any> = styled.span({
    display: 'inline-block',
    borderRadius: '1rem',
    padding: '0.25rem 0.75rem',
    transition: '0.3s',
    fontSize: '1.1rem',
    backgroundColor: cssProperties.subColor,
    color: cssProperties.accentColor,
    '&:hover': {
      boxShadow: '2px 4px 2px 2px rgba(0, 0, 0, 0.2)',
    },
  })
  return <Style>{props.itemName}</Style>
}

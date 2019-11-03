import * as React from 'react'
import styled from '@emotion/styled'

import cssProperties from '../../mixins/cssProperties'

interface IComponentProps {
  itemName: string
}

export default (props: IComponentProps): React.ReactElement => {
  const Style = styled.span`
    display: inline-block;
    border-radius: 1em;
    padding: 0.25em 0.75em;
    transition: 0.3s;
    font-size: 1.1rem;
    background-color: ${cssProperties.subColor};
    color: ${cssProperties.accentColor};
    &:hover {
      box-shadow: 2px 4px 2px 2px rgba(0, 0, 0, 0.2);
    }
  `
  return <Style>{props.itemName}</Style>
}

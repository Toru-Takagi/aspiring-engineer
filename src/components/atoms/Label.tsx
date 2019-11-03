import * as React from 'react'
import styled from '@emotion/styled'

import cssProperties from '../../mixins/cssProperties'

interface IProps {
  name: string
}

export default (props: IProps): React.ReactElement => {
  const LabelStyle = styled.span`
    width: 80px;
    height: 30px;
    position: absolute;
    top: 85px;
    left: 0;
    background-color: ${cssProperties.accentColor};
    color: ${cssProperties.white};
    line-height: 30px;
    font-size: 0.9rem;
    text-align: center;
  `
  return <LabelStyle>{props.name}</LabelStyle>
}

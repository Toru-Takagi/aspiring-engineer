import * as React from 'react'
import styled, { StyledComponent } from '@emotion/styled'

import cssProperties from '../../mixins/cssProperties'

interface IProps {
  name: string
}

export default (props: IProps): React.ReactElement => {
  const LabelStyle: StyledComponent<any, any, any> = styled.span({
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
  return <LabelStyle>{props.name}</LabelStyle>
}

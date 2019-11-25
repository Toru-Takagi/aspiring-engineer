import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

import SearchIcon from '../atoms/icons/SearchIcon'

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default (props: IProps) => {
  const style: SerializedStyles = css({
    margin: '10px auto 0',
    width: '40%',
    height: '50px',
    [CssProperties.mediaQuery.isSp]: {
      width: '80%',
    },
    input: {
      boxSizing: 'border-box',
      border: `1px solid ${CssProperties.colors.white}`,
      borderRadius: '5px',
      padding: '0 10px',
      backgroundColor: CssProperties.colors.mainColor,
      color: CssProperties.colors.white,
    },
    svg: {
      boxSizing: 'border-box',
      padding: '10px',
      height: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      color: CssProperties.colors.accentColor,
    },
  })

  return (
    <div css={style}>
      <input
        type='text'
        placeholder='記事を検索'
        onChange={props.onChange}
      ></input>
      <SearchIcon />
    </div>
  )
}

import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

import SearchIcon from '../atoms/icons/SearchIcon'
import AlgoliaIcon from '../atoms/icons/AlgoliaIcon'

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default (props: IProps) => {
  const [isShowAlgoliaIcon, setIsShowAlgoliaIcon] = React.useState(false)

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
    '> svg': {
      boxSizing: 'border-box',
      padding: '10px',
      height: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      color: CssProperties.colors.accentColor,
    },
    '.algolia-icon-area': {
      position: 'absolute',
      top: '-30px',
      right: '-30px',
      width: '200px',
      height: '20px',
      zIndex: 2,
      svg: {
        width: '100%',
        height: '100%',
      },
    },
  })

  return (
    <div id='search-area' css={style}>
      <input
        type='text'
        placeholder='記事を検索'
        onChange={props.onChange}
        onFocus={() => {
          setIsShowAlgoliaIcon(true)
        }}
        onBlur={() => {
          setIsShowAlgoliaIcon(false)
        }}
      ></input>
      <SearchIcon />
      <div className='algolia-icon-area'>
        {isShowAlgoliaIcon && <AlgoliaIcon />}
      </div>
    </div>
  )
}

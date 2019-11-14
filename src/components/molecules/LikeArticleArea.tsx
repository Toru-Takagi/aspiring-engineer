import * as React from 'react'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'
import { css, SerializedStyles } from '@emotion/core'

import { ILikeMapValue } from '../../state/state'
import { useLikeMap, ILikeMap } from '../../modules/useLikeMap'
import CssProperties from '../../mixins/cssProperties'

export default (): React.ReactElement => {
  // お気に入りの記事情報を格納
  const [likeMap]: [Map<string, ILikeMapValue>, ILikeMap] = useLikeMap(
    useDispatch()
  )

  const likeArticleAreaStyle: SerializedStyles = css({
    padding: CssProperties.footer.ContentsBasic.padding,
    width: `calc((100% - ${CssProperties.profile.areaSize}) / 2)`,
    '> ul': {
      margin: 0,
      paddingLeft: '20px',
      height: 'calc(100% - 20px)',
      overflowX: 'hidden',
      overflowY: 'auto',
      whiteSpace: 'nowrap',
      '> span': {
        lineHeight: '2.5rem',
        color: CssProperties.colors.white,
        whiteSpace: 'normal',
      },
      '> a': {
        '> li': {
          marginTop: '0.25rem',
          marginRight: '0.75rem',
          listStyleType: 'disc',
          color: CssProperties.colors.white,
          overflowX: 'hidden',
          transition: '0.4s',
          willChange: 'color',
          '&:hover': {
            color: CssProperties.colors.accentColor,
          },
          '&::before': {
            content: "'◆ '",
          },
        },
      },
    },
    [CssProperties.mediaQuery.isTablet]: {
      marginTop: CssProperties.footer.ContentsBasic.marginTop,
      width: `calc(100% - ${CssProperties.profile.areaSize})`,
      height: CssProperties.footer.ContentsBasic.height,
    },
    [CssProperties.mediaQuery.isSp]: {
      width: '100%',
      height: 'auto',
      '> ul': {
        paddingLeft: 0,
        '> span': {
          display: 'block',
          width: '100%',
          textAlign: 'center',
        },
      },
    },
  })

  // お気に入りの記事一覧を描画
  return (
    <div css={likeArticleAreaStyle}>
      <span className='sub-title'>お気に入り</span>
      <ul>
        {likeMap.keys === undefined ? (
          <span></span>
        ) : Array.from(likeMap.keys()).length === 0 ? (
          <span>気に入っていただけるような記事を書けるように精進します。</span>
        ) : (
          Array.from(likeMap.keys()).map((value: string) => {
            return (
              <Link to={`/article/${value}`} key={value}>
                <li>
                  {likeMap.get(value) !== undefined
                    ? likeMap.get(value)!.title
                    : ''}
                </li>
              </Link>
            )
          })
        )}
      </ul>
    </div>
  )
}

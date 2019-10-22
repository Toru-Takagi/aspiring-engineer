import * as React from 'react'
import { Link } from 'gatsby'
import { useSelector } from 'react-redux'

import { IState, ILikeMapValue } from '../../state/state'

import '../../scss/like-article-area.scss'

export default () => {
  const likeMap: Map<string, ILikeMapValue> = useSelector(
    (state: IState) => state.likeMap,
    () => false
  )

  return (
    <div id='like-article-area'>
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
                <li>{likeMap.get(value).title}</li>
              </Link>
            )
          })
        )}
      </ul>
    </div>
  )
}

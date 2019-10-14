import React from 'react'
import { Link } from 'gatsby'
import { useSelector } from 'react-redux'

import '../../scss/like-article-area.scss'

export default () => {
  const likeMap = useSelector(state => state.likeMap, [])

  return (
    <div id='like-article-area'>
      <span className='sub-title'>お気に入り</span>
      <ul>
        {likeMap.keys === undefined ? (
          <span></span>
        ) : Array.from(likeMap.keys()).length === 0 ? (
          <span>気に入っていただけるような記事を書けるように精進します。</span>
        ) : (
          Array.from(likeMap.keys()).map(key => {
            return (
              <Link to={`/article/${key}`} key={key}>
                <li>{likeMap.get(key).title}</li>
              </Link>
            )
          })
        )}
      </ul>
    </div>
  )
}

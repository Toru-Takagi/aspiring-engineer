import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../components/templates/default-layout'
import Tag from '../components/atoms/tag'
import HomeIcon from '../components/atoms/icons/homeIcon'
import LikeIcon from '../components/atoms/icons/likeIcon'
import NotLikeIcon from '../components/atoms/icons/notLikeIcon'
import TwitterIcon from '../components/atoms/icons/twitterIcon'
import HatenaBookmarkIcon from '../components/atoms/icons/hatenaBookmarkIcon'

import scssVar from '../scss/article.scss'
import '../scss/prism.scss'

export default props => {
  const data = props.pageContext.data
  let likeMap = useSelector(state => state.likeMap, [])
  const dispatch = useDispatch()
  const clickLike = e => {
    dispatch({
      type: 'CLICK_LIKE',
      likeFlag: e.currentTarget.getAttribute('data-like') === 'true',
      likeMap: likeMap,
      createNumber: data.createNumber.toString(),
      title: data.title,
    })
  }
  return (
    <Layout>
      <div id='article'>
        <header>
          <Img sizes={data.coverImage.sizes} />
          <div className='article-title-area'>
            <h1 className='article-title'>{data.title}</h1>
            <span className='date'>
              {(() => {
                const date = new Date(data.createdAt)
                let month = date.getMonth() + 1
                month = month > 9 ? month : '0' + month
                const day =
                  date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
                const result = date.getFullYear() + '/' + month + '/' + day
                return result
              })()}
            </span>
          </div>
        </header>
        <div id='menu-bar-bg'>
          <div id='menu-bar'>
            <Link to='/'>
              <div className='menu-bar-item'>
                <HomeIcon color={scssVar.white} />
                <span>Home</span>
              </div>
            </Link>
            <div
              className='menu-bar-item'
              data-like={
                likeMap.get(data.createNumber.toString()) !== undefined
                  ? true
                  : false
              }
              onClick={clickLike}
            >
              {likeMap.get(data.createNumber.toString()) !== undefined ? (
                <LikeIcon color={scssVar.white} />
              ) : (
                <NotLikeIcon color={scssVar.white} />
              )}
              <span>Like</span>
            </div>
            <div className='menu-bar-item'>
              <TwitterIcon color={scssVar.white} />
              <span>Twitter</span>
            </div>
            <div className='menu-bar-item'>
              <HatenaBookmarkIcon />
              <span>Hatena</span>
            </div>
          </div>
        </div>
        <div
          className='article-main'
          dangerouslySetInnerHTML={{
            __html: data.content.childMarkdownRemark.html,
          }}
        ></div>
        <div className='tag-area'>
          {data.category.map((category, index) => {
            return (
              <span key={index}>
                <Tag
                  itemName={category.name}
                  bgColor='#3D3D3D'
                  color='#CA3E47'
                />
              </span>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

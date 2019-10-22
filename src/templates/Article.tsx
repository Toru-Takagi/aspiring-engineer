import * as React from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { useSelector, useDispatch } from 'react-redux'

import Converter from '../mixins/converter'
import { IState } from '../state/state'

import Layout from './DefaultLayout'
import Tag from '../components/atoms/Tag'
import HomeIcon from '../components/atoms/icons/HomeIcon'
import LikeIcon from '../components/atoms/icons/LikeIcon'
import NotLikeIcon from '../components/atoms/icons/NotLikeIcon'
import TwitterIcon from '../components/atoms/icons/TwitterIcon'
import HatenaBookmarkIcon from '../components/atoms/icons/HatenaBookmarkIcon'

import '../scss/article.scss'
import '../scss/prism.scss'

interface IProps {
  pageContext: {
    data: IData
  }
}

interface IData {
  title: string
  id: number
  createdAt: string
  createNumber: number
  content: {
    content: string
    childMarkdownRemark: {
      html: string
    }
  }
  category: {
    name: string
  }[]
  coverImage: {
    sizes: FluidObject
  }
}

export default (props: IProps) => {
  const data: IData = props.pageContext.data
  let likeMap: Map<
    string,
    { createNumber: string; title: string }
  > = useSelector((state: IState) => state.likeMap)
  const dispatch: React.Dispatch<any> = useDispatch()
  const clickLike: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
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
              {new Converter().changeTimestampToDateString(data.createdAt)}
            </span>
          </div>
        </header>
        <div id='menu-bar-bg'>
          <div id='menu-bar'>
            <Link to='/'>
              <div className='menu-bar-item'>
                <HomeIcon />
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
                <LikeIcon />
              ) : (
                <NotLikeIcon />
              )}
              <span>Like</span>
            </div>
            <div className='menu-bar-item twitter-icon'>
              <TwitterIcon />
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
              <Link to={'/?word=' + category.name} key={index}>
                <Tag
                  itemName={category.name}
                  bgColor='#3D3D3D'
                  color='#CA3E47'
                />
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

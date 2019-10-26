import * as React from 'react'
import { useDispatch } from 'react-redux'
import { navigate, useStaticQuery, graphql } from 'gatsby'

import Algolia from '../../mixins/algolia'
import {
  IAllContentfulCategory,
  ICategory,
} from '../../model/allContentfulCategory'

import Tag from '../atoms/Tag'

import '../../scss/category-area.scss'

export default (): React.ReactElement => {
  const data: IAllContentfulCategory = useStaticQuery(graphql`
    query CategoryQuery {
      allContentfulCategory {
        nodes {
          name
          article {
            id
          }
        }
      }
    }
  `)
  const dispatch: React.Dispatch<any> = useDispatch()
  const clickCategory = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    const word: string = e.currentTarget.getAttribute('data-category')
      ? e.currentTarget.getAttribute('data-category')!
      : ''
    const searchAreaElm: HTMLElement | null = document.getElementById(
      'search-area'
    )
    if (searchAreaElm !== null) {
      const searchInputElm: HTMLInputElement | null = searchAreaElm.querySelector(
        'input'
      )
      if (searchInputElm !== null) searchInputElm.value = word
      new Algolia().searchAllAndSetArticleList(word, dispatch)
    }
    navigate('/?word=' + word)
  }
  return (
    <div id='category-area'>
      <span className='sub-title'>カテゴリ一覧</span>
      <ul id='category-list'>
        {data.allContentfulCategory.nodes.map(
          (category: ICategory, index: number) => {
            return (
              <li
                key={index}
                onClick={clickCategory}
                data-category={category.name}
              >
                <Tag
                  itemName={
                    category.name + ' (' + category.article.length + ')'
                  }
                  bgColor='#3D3D3D'
                  color='#CA3E47'
                />
              </li>
            )
          }
        )}
      </ul>
    </div>
  )
}

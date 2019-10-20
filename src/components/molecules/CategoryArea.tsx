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

export default () => {
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
  const clickCategory: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const word: string = e.currentTarget.getAttribute('data-category')
    const searchInputElm: HTMLElement = document.getElementById('search-area')
    if (searchInputElm !== null) {
      searchInputElm.querySelector('input').value = word
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

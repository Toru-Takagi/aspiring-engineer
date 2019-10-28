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
import { IAction } from '../../state/createStore'

export default (): React.ReactElement => {
  // Contentfullからカテゴリー情報を取得して格納
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

  // Storeを変更するdispatchを取得
  const dispatch: React.Dispatch<IAction> = useDispatch()

  /**
   * 検索エリアが存在すればAlgoliaで検索し、存在しなければGet情報を付与してページ遷移するメソッド
   * @param e
   */
  const clickCategory: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void = e => {
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

  // カテゴリ一覧を描画する
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
                    category.name +
                    ' (' +
                    (category.article !== null
                      ? String(category.article.length)
                      : '0') +
                    ')'
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

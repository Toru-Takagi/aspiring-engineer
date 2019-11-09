import * as React from 'react'
import { useDispatch } from 'react-redux'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import { css, SerializedStyles } from '@emotion/core'

import Algolia from '../../mixins/algolia'
import CssProperties from '../../mixins/cssProperties'
import { IAction } from '../../state/createStore'
import {
  IAllContentfulCategory,
  ICategory,
} from '../../model/allContentfulCategory'

import Tag from '../atoms/Tag'

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

  const categoryAreaStyle: SerializedStyles = css({
    padding: CssProperties.footerContentsBasicPadding,
    width: `calc((100% - ${CssProperties.profileAreaSize}) / 2)`,
    ul: {
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'flex-start',
      margin: 0,
      padding: '0 0 0 20px',
      height: 'calc(100% - 20px)',
      overflow: 'auto',
      li: {
        margin: '0.25rem',
        height: '2.3rem',
        cursor: 'pointer',
      },
    },
    [CssProperties.isTablet]: {
      marginTop: `calc(${CssProperties.footerContentsBasicMarginTop} * 2)`,
      width: '100%',
      height: `calc(100% - ${CssProperties.footerContentsBasicHeight})`,
      order: 2,
    },
    [CssProperties.isSp]: {
      marginTop: CssProperties.footerContentsBasicMarginTop,
      height: 'auto',
      ul: {
        paddingLeft: 0,
      },
      '.sub-title': {
        display: 'block',
        width: '100%',
        textAlign: 'center',
      },
    },
  })

  // カテゴリ一覧を描画する
  return (
    <div css={categoryAreaStyle}>
      <span className='sub-title'>カテゴリ一覧</span>
      <ul>
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
                />
              </li>
            )
          }
        )}
      </ul>
    </div>
  )
}

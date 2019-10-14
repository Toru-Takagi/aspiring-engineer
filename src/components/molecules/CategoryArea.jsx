import React from 'react'
import { useDispatch } from 'react-redux'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import algoliaSearch from 'algoliasearch'

import Tag from '../atoms/Tag'

import '../../scss/category-area.scss'

export default () => {
  const data = useStaticQuery(graphql`
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
  const dispatch = useDispatch()
  const clickCategory = e => {
    const word = e.currentTarget.getAttribute('data-category')
    const searchInputElm = document.getElementById('search-area')
    const algoliaIndex = algoliaSearch(
      'BJI7EFTZSF',
      'b83625cbd299d487bcfe32e93c6671d3'
    ).initIndex('aspiring-engineer')
    if (searchInputElm !== null) {
      searchInputElm.querySelector('input').value = word
      algoliaIndex.search({ query: word }).then(searchResult => {
        dispatch({
          type: 'SET_ARTICLE_LIST',
          articleList: searchResult.hits,
        })
      })
    }
    navigate('/?word=' + word)
  }
  return (
    <div id='category-area'>
      <span className='sub-title'>カテゴリ一覧</span>
      <ul id='category-list'>
        {data.allContentfulCategory.nodes.map((category, index) => {
          return (
            <li
              key={index}
              onClick={clickCategory}
              data-category={category.name}
            >
              <Tag
                itemName={category.name + ' (' + category.article.length + ')'}
                bgColor='#3D3D3D'
                color='#CA3E47'
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

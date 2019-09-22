import React from  'react'
import { useStaticQuery, graphql } from 'gatsby'

import Tag from '../atoms/tag'

export default () => {
  const data = useStaticQuery(graphql`
    query CategoryQuery {
      allContentfulCategory {
        nodes {
          name
        }
      }
    }
  `)
  return (
    <div id='category-area'>
      <span className='sub-title'>カテゴリ一覧</span>
      <ul id='category-list'>
        {
          data.allContentfulCategory.nodes.map((category, index) => {
            return <li key={ index }><Tag itemName={ category.name + ' (3)' } bgColor='#3D3D3D' color='#CA3E47' /></li>
          })
        }
      </ul>
    </div>
  )
}
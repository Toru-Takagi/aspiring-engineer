import React from 'react'

import '../../scss/tag.scss'

export default props => {
  const style = {
    backgroundColor: props.bgColor,
    color: props.color,
  }
  return (
    <span style={style} className='tag'>
      {props.itemName}
    </span>
  )
}

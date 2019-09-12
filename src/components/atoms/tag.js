import React from 'react'

export default (props) => {
  const style = {
    'display': 'inline-block',
    'border-radius': '1em',
    'padding': '0.25em 0.75em',
    'background-color': props.bgColor,
    'color': props.color,
  }
  return <span style={ style }>{ props.itemName }</span>
}
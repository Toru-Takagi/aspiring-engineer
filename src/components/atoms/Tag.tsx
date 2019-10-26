import * as React from 'react'

import '../../scss/tag.scss'

interface Props {
  bgColor: string
  color: string
  itemName: string
}

export default (props: Props): React.ReactElement => {
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

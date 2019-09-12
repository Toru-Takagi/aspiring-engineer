import React from 'react'

export default (props) => {
  const style = { width: props.size }
  const backgroundStyle = { fill: props.backgroundColor }
  const iconStyle = { fill: props.iconColor }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      style={ style }>
        <rect x="0" y="0" style={ backgroundStyle } width="200" height="200"/>
        <path style={ iconStyle } d="M67.2,138.9h65.7V61.2H85.4c-0.3,0-0.9,0.3-1.2,0.6c-5.6,6-11.1,12.1-16.6,18.1c-0.3,0.3-0.5,0.9-0.5,1.5 L67.2,138.9z M139.4,48c3.6,0,6.6,3,6.6,6.6v90.9c0,3.6-2.9,6.6-6.6,6.6H60.6c-3.6,0-6.6-3-6.6-6.6c0-0.7,0-64,0-66.5 c0-2.6,0.8-4.7,2.6-6.6l19.8-21.6c1.7-1.9,3.7-2.7,6.2-2.7H139.4z M80.3,93.8c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3h8.9l0-9 c0-2.9,2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3v14.2c0,2.9-2.4,5.3-5.3,5.3H80.3z"/>
    </svg>
  )
}
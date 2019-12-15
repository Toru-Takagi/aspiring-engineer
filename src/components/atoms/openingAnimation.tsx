import * as React from 'react'
import { css, SerializedStyles, keyframes } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'

export default (): React.ReactElement => {
  const transitionAnimation = keyframes`
    0% {
      transform: translateY(0)
    }
    30% {
      transfrom: translateY(-100vh)
    }
    40% {
      transform: translateY(-100vh)
    }
    100% {
      transform: translateY(-200vh)
    }
  `

  const style: SerializedStyles = css({
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10000,
    width: '100vw',
    height: '100vh',
    animation: `${transitionAnimation} 1.5s 0.8s`,
    animationTimingFunction: 'cubic-bezier(.51,0,.53,1)',
    animationFillMode: 'forwards',
    willChange: 'transform',
    '.first-cover': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 10001,
      backgroundColor: CssProperties.colors.mainColor,
    },
    '.second-cover': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 10002,
      transform: 'translateY(100vh)',
      backgroundColor: CssProperties.colors.subColor,
    },
  })

  return (
    <div css={style}>
      <div className='first-cover'></div>
      <div className='second-cover'></div>
    </div>
  )
}

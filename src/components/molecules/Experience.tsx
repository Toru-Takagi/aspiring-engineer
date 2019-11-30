import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import { transitionShowAnimation } from '../../modules/animation'

import CssProperties from '../../mixins/cssProperties'

interface IProps {
  year: string
  schoolYear: string
  children: React.ReactElement
  scrollInfo: {
    mainHeight: number
    scrollTop: number
  }
}

export default (props: IProps) => {
  const [isShow, setIsShow]: [
    boolean,
    React.Dispatch<boolean>
  ] = React.useState<boolean>(false)

  const ref: React.RefObject<HTMLLIElement> = React.createRef()

  const experienceStyle: SerializedStyles = css({
    position: 'relative',
    borderLeft: `3px solid ${CssProperties.colors.white}`,
    padding: '40px 10px',
    '&::before': {
      content: "''",
      display: 'block',
      margin: 'auto 0',
      border: `2px solid ${CssProperties.colors.white}`,
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '-12px',
      backgroundColor: CssProperties.colors.subColor,
    },
    '.year-area': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'absolute',
      top: 0,
      width: '130px',
      left: '-150px',
      textAlign: 'right',
      [CssProperties.mediaQuery.isSp]: {
        width: '120px',
        left: '-140px',
      },
      '> span': {
        width: '100%',
        '&:last-of-type': {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
    '.child-area': {
      marginLeft: '5px',
    },
    '.animation-target': {
      opacity: 0,
      transform: 'translateY(50px)',
      willChange: 'opacity, transform',
      animation: isShow ? `${transitionShowAnimation} 1s 0.5s` : '',
      animationFillMode: 'forwards',
    },
  })

  React.useEffect((): void => {
    if (!isShow) {
      const top: number =
        ref.current != null
          ? ref.current.getBoundingClientRect().top
          : 100000000

      if (top < props.scrollInfo.mainHeight) setIsShow(true)
    }
  }, [props.scrollInfo])

  return (
    <li ref={ref} css={experienceStyle}>
      <div className='year-area animation-target'>
        <span>{props.year}</span>
        <span>{props.schoolYear}</span>
      </div>
      <div className='child-area animation-target'>{props.children}</div>
    </li>
  )
}

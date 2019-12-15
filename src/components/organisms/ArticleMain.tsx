import * as React from 'react'
import { css, SerializedStyles } from '@emotion/core'

import CssProperties from '../../mixins/cssProperties'
import { transitionShowAnimation } from '../../modules/animation'

interface IProps {
  html: string
}

export default (props: IProps) => {
  const articleMainStyle: SerializedStyles = css({
    margin: '0 auto',
    padding: '50px 20px 20px 20px',
    width: '980px',
    height: 'auto',
    opacity: 0,
    transform: 'translateY(50)',
    animation: `${transitionShowAnimation} 1s 1s`,
    animationFillMode: 'forwards',
    color: CssProperties.colors.white,
    [CssProperties.mediaQuery.isPc]: {
      width: '100%',
      padding: '15px 10px',
    },
    h2: {
      margin: '30px 0 20px 0',
      borderLeft: `8px solid ${CssProperties.colors.accentColor}`,
      padding: '5px 0 5px 10px',
      backgroundColor: CssProperties.colors.subColor,
      fontSize: '1.8rem',
      [CssProperties.mediaQuery.isSp]: {
        margin: '15px 0 10px 0',
      },
      '&:first-of-type': {
        marginTop: 0,
      },
    },
    h4: {
      marginTop: '15px',
      fontSize: '1.2rem',
    },
    a: {
      color: CssProperties.colors.twitterColor,
      fontWeight: 'bold',
      textDecoration: 'underline',
      transition: '0.4s',
      '&:hover': {
        color: CssProperties.colors.subColor,
      },
    },
    p: {
      padding: '5px 0 5px 20px',
      lineHeight: '1.5rem',
      fontSize: '1.1rem',
      [CssProperties.mediaQuery.isSp]: {
        paddingLeft: '10px',
      },
    },
    img: {
      marginTop: '10px',
      borderRadius: '10px',
      maxWidth: '80%',
      boxShadow: '0 0 16px 8px rgba(0, 0, 0, 0.3)',
      [CssProperties.mediaQuery.isSp]: {
        maxWidth: '100%',
      },
    },
    strong: {
      color: CssProperties.colors.qiitaColor,
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
    '.gatsby-highlight': {
      marginBottom: '20px',
    },
    pre: {
      marginLeft: '20px',
      borderRadius: '15px',
      boxShadow: '0 0 16px 8px rgba(0, 0, 0, 0.3)',
      [CssProperties.mediaQuery.isSp]: {
        marginLeft: '10px',
      },
    },
    '.twitter-tweet': {
      marginLeft: '20px',
      [CssProperties.mediaQuery.isSp]: {
        marginLeft: '10px',
        width: 'calc(100% - 10px) !important',
        minWidth: 'auto !important',
      },
    },
    blockquote: {
      margin: '5px 0 5px 40px',
      borderLeft: `5px solid #8d8d8d`,
    },
    iframe: {
      marginLeft: '40px',
      width: '480px',
      height: '270px',
      [CssProperties.mediaQuery.isSp]: {
        margin: 0,
        width: '100%',
        boxSizing: 'border-box',
      },
    },
    ul: {
      marginLeft: '10px',
      [CssProperties.mediaQuery.isSp]: {
        margin: 0,
        paddingLeft: '30px',
      },
      li: {
        listStyleType: 'disc',
        padding: '3px 0',
        p: {
          padding: 0,
        },
      },
    },
    ol: {
      marginLeft: '10px',
      li: {
        listStyleType: 'decimal',
        padding: '3px 0 3px 5px',
        p: {
          padding: 0,
        },
      },
    },
    table: {
      margin: '20px',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderSpacing: 0,
      boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.3)',
      th: {
        borderBottom: '2px solid rgba(0, 0, 0, 0.2)',
        padding: '10px',
      },
      td: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        padding: '10px',
      },
      tr: {
        '&:last-child': {
          td: {
            borderBottom: 0,
          },
        },
      },
    },
  })

  return (
    <div
      css={articleMainStyle}
      dangerouslySetInnerHTML={{
        __html: props.html,
      }}
    ></div>
  )
}

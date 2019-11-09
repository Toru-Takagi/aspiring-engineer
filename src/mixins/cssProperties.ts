interface ICssProperties {
  subColor: string
  accentColor: string
  white: string
  isSp: string
  isTablet: string
  isPc: string
}

const CssProperties: ICssProperties = {
  subColor: '#3d3d3d',
  accentColor: '#ca3e47',
  white: '#f5f7fa',
  isSp: '@media screen and (max-width: 480px)',
  isTablet: '@media screen and (max-width: 896px)',
  isPc: '@media screen and (max-width: 1024px)',
}

export default CssProperties

interface ICssProperties {
  mainColor: string
  subColor: string
  accentColor: string
  white: string
  twitterColor: string
  qiitaColor: string
  noteColor: string
  isSp: string
  isTablet: string
  isPc: string
  footer: {
    openHeight: {
      pc: string
      sp: string
    }
    toggleButton: {
      top: string
      size: string
    }
  }
  footerContentsBasicMarginTop: string
  footerContentsBasicPadding: string
  footerContentsBasicHeight: string
  profileAreaSize: string
  profileIconSize: string
  snsIconSize: {
    width: string
    height: string
  }
}

const CssProperties: ICssProperties = {
  mainColor: '#5f5e5e',
  subColor: '#3d3d3d',
  accentColor: '#ca3e47',
  white: '#f5f7fa',
  twitterColor: '#1da0f1',
  qiitaColor: '#58ba0c',
  noteColor: '#31c9b4',
  isSp: '@media screen and (max-width: 480px)',
  isTablet: '@media screen and (max-width: 896px)',
  isPc: '@media screen and (max-width: 1024px)',
  footer: {
    openHeight: {
      pc: '225px',
      sp: '60%',
    },
    toggleButton: {
      top: '15px',
      size: '70px',
    },
  },
  footerContentsBasicMarginTop: '20px',
  footerContentsBasicPadding: '0 10px',
  footerContentsBasicHeight: '128px',
  profileAreaSize: '250px',
  profileIconSize: '100px',
  snsIconSize: {
    width: '20px',
    height: '25px',
  },
}

export default CssProperties

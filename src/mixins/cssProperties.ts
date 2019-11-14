interface ICssProperties {
  colors: {
    mainColor: string
    subColor: string
    accentColor: string
    scrollBar: {
      backgroundColor: string
      color: string
    }
    white: string
    twitterColor: string
    qiitaColor: string
    noteColor: string
  }
  mediaQuery: {
    isSp: string
    isTablet: string
    isPc: string
  }
  header: {
    height: {
      pc: string
      sp: string
    }
    margin: {
      horizontal: string
    }
  }
  footer: {
    openHeight: {
      pc: string
      sp: string
    }
    toggleButton: {
      top: string
      size: string
    }
    ContentsBasic: {
      marginTop: string
      padding: string
      height: string
    }
  }
  profile: {
    areaSize: string
    iconSize: string
  }
  snsIconSize: {
    width: string
    height: string
  }
  on: {
    scroll: {
      transition: string
    }
  }
  scroll: {
    translate: {
      y: string
    }
  }
}

const CssProperties: ICssProperties = {
  colors: {
    mainColor: '#5f5e5e',
    subColor: '#3d3d3d',
    accentColor: '#ca3e47',
    scrollBar: {
      backgroundColor: 'rgba(202, 62, 62, 0.2)',
      color: 'rgba(61, 61, 61, 0.9)',
    },
    white: '#f5f7fa',
    twitterColor: '#1da0f1',
    qiitaColor: '#58ba0c',
    noteColor: '#31c9b4',
  },
  mediaQuery: {
    isSp: '@media screen and (max-width: 480px)',
    isTablet: '@media screen and (max-width: 896px)',
    isPc: '@media screen and (max-width: 1024px)',
  },
  header: {
    height: {
      pc: '200px',
      sp: '100px',
    },
    margin: {
      horizontal: '15px',
    },
  },
  footer: {
    openHeight: {
      pc: '225px',
      sp: '60%',
    },
    toggleButton: {
      top: '15px',
      size: '70px',
    },
    ContentsBasic: {
      marginTop: '20px',
      padding: '0 10px',
      height: '128px',
    },
  },
  profile: {
    areaSize: '250px',
    iconSize: '100px',
  },
  snsIconSize: {
    width: '20px',
    height: '25px',
  },
  on: {
    scroll: {
      transition: '1s',
    },
  },
  scroll: {
    translate: {
      y: '100px',
    },
  },
}

export default CssProperties

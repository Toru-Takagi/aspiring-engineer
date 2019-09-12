import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'
import Image from '../atoms/gatsbyImage'
import Tag from '../atoms/tag'
import ArrowIcon from '../atoms/icons/arrowIcon'
import TwitterIcon from '../atoms/icons/twitterIcon'
import NoteIcon from '../atoms/icons/noteIcon'
import MailIcon from '../atoms/icons/mailIcon'

// import './layout.css'
import scssVar from './default-layout.scss'

// const Layout = ({ children }) => {
//   // const data = useStaticQuery(graphql`
//   //   query SiteTitleQuery {
//   //     site {
//   //       siteMetadata {
//   //         title
//   //       }
//   //     }
//   //   }
//   // `)

//   return (
//       <div id='default-layout-wrapper'>
//         <div id='default-layout'>
//           <main>{children}</main>
//           <footer>footer</footer>
//         </div>
//       </div>
//   )
// }

class Layout extends React.Component {
  constructor () {
    super()
    this.state = { footerHeight: 225 }
  }
  render () {
    const { children } = this.props
    const mainStyle = {
      height: 'calc(100% - ' + this.state.footerHeight + 'px)'
    }
    const footerStyle = {
      height: this.state.footerHeight + 'px'
    }

    return (
      <div id='default-layout'>
        <main style={ mainStyle }>{children}</main>
        <footer style={ footerStyle }>
          <div class='toggle-button'>
            <ArrowIcon iconColor={ scssVar.white } size='40px' />
          </div>
          <div id='footer-background'>
            <div id='footer-container'>
              <div id='profile-area'>
                <div id='profile'>
                  <div class='user-icon'>
                    <Image filename='user-icon.png' />
                  </div>
                  <span class='profile-name'>Toru Takagi</span>
                </div>
                <div class='sns-area'>
                  <ul>
                    <li class='twitter'>
                      <TwitterIcon iconColor={ scssVar.twitterColor } size={ scssVar.snsIconSize} />
                      <span>Twitter</span>
                    </li>
                    <li class='qiita'>
                      <div>
                        <Image filename='qiita-square.png' />
                      </div>
                      <span>Qiita</span>
                    </li>
                    <li class='note'>
                      <NoteIcon backgroundColor={ scssVar.noteColor } iconColor='#FFFFFF' size={ scssVar.snsIconSize } />
                      <span>note</span>
                    </li>
                    <li class='mail'>
                      <MailIcon iconColor={ scssVar.white } size={ scssVar.snsIconSize } />
                      <span>mail</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div id='category-area'>
                <span class='sub-title'>カテゴリ一覧</span>
                <ul id='category-list'>
                  <li><Tag itemName='Vue.js (3)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='VuePress (5)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Riot.js (14)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='React (1)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Nuxt.js (3)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Docker (34)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='AWS (3)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='PHP (2)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='HTML (4)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='JavaScript (5)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='CSS (4)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Node.js (59)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Java (3)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Express (12)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='FuelPHP (4)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Laravel (4)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='CakePHP (2)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Gatsby (9)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Kubernetes (73)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='ECS (43)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Python (3)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Firebase (5)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Visual Studio Code (45)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Apache (4)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='CentOS (7)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='Cerny.js (9)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='MySQL (45)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                  <li><Tag itemName='PostgreSQL (4)' bgColor='#3D3D3D' color='#CA3E47' /></li>
                </ul>
              </div>
              <div id='like-article-area'>
                <span class='sub-title'>お気に入り</span>
                <ul>
                  <li>IT研修でVuePress+Express+Nuxt on Dockerでシステムを作成した話</li>
                  <li>JSのフレームワークを知らない人間がVue.jsを2ヵ月触ってみたって話</li>
                  <li>Nuxt.js＋Firebase Cloud Messaging(FCM)を使ったPWA化が簡単で衝撃的だった</li>
                  <li>MAMP3.5.1 Apache couldn't be started.</li>
                  <li>Eclipseを使ってSelenium-WebDriverを使ってみた</li>
                  <li>pyinstallerで躓いたところ～Pythonコードをexe化～</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

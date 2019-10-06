import React from 'react'

import Image from '../atoms/gatsbyImage'
import TwitterIcon from '../atoms/icons/twitterIcon'
import NoteIcon from '../atoms/icons/noteIcon'
import MailIcon from '../atoms/icons/mailIcon'

import scssVar from '../../scss/profile-area.scss'
import scssColor from '../../scss/colors.scss'

export default () => {
  return (
    <div id='profile-area'>
      <div id='profile'>
        <div className='user-icon'>
          <Image filename='user-icon.png' />
        </div>
        <span className='profile-name'>Toru Takagi</span>
      </div>
      <div className='sns-area'>
        <ul>
          <a
            href='https://twitter.com/TTrpbm'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li className='twitter'>
              <TwitterIcon
                iconColor={scssColor.twitterColor}
                size={scssVar.snsIconSize}
              />
              <span>Twitter</span>
            </li>
          </a>
          <a
            href='https://qiita.com/TakagiToru'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li className='qiita'>
              <div>
                <Image filename='qiita-square.png' />
              </div>
              <span>Qiita</span>
            </li>
          </a>
          <a
            href='https://note.mu/toru_takagi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li className='note'>
              <NoteIcon
                backgroundColor={scssColor.noteColor}
                iconColor='#FFFFFF'
                size={scssVar.snsIconSize}
              />
              <span>note</span>
            </li>
          </a>
          <a href='mailto:kurowasi2525@gmail.com'>
            <li className='mail'>
              <MailIcon
                iconColor={scssColor.white}
                size={scssVar.snsIconSize}
              />
              <span>mail</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

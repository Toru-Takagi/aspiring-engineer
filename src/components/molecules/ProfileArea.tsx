import * as React from 'react'

import Image from '../atoms/GatsbyImage'
import TwitterIcon from '../atoms/icons/TwitterIcon'
import NoteIcon from '../atoms/icons/NoteIcon'
import MailIcon from '../atoms/icons/MailIcon'

import '../../scss/profile-area.scss'

export default (): React.ReactElement => {
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
              <TwitterIcon />
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
              <NoteIcon />
              <span>note</span>
            </li>
          </a>
          <a href='mailto:kurowasi2525@gmail.com'>
            <li className='mail'>
              <MailIcon />
              <span>mail</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

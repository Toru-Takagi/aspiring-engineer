import React from 'react'

import Image from '../atoms/gatsbyImage'
import TwitterIcon from '../atoms/icons/twitterIcon'
import NoteIcon from '../atoms/icons/noteIcon'
import MailIcon from '../atoms/icons/mailIcon'

import '../../scss/profile-area.scss'

export default () => {
  const styles = {
    twitterColor: '#1da0f1',
    noteColor: '#41c9b4',
    white: '#f5f7fa',
    snsIconSize: '20px',
  }
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
                iconColor={styles.twitterColor}
                size={styles.snsIconSize}
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
                backgroundColor={styles.noteColor}
                iconColor='#FFFFFF'
                size={styles.snsIconSize}
              />
              <span>note</span>
            </li>
          </a>
          <a href='mailto:kurowasi2525@gmail.com'>
            <li className='mail'>
              <MailIcon iconColor={styles.white} size={styles.snsIconSize} />
              <span>mail</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

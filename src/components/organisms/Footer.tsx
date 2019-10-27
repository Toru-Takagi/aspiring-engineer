import * as React from 'react'
import { useDispatch } from 'react-redux'

import ProfileArea from '../molecules/ProfileArea'
import CategoryArea from '../molecules/CategoryArea'
import LikeArticleArea from '../molecules/LikeArticleArea'
import ArrowIcon from '../atoms/icons/ArrowIcon'

import { useToggleFlag, IToggleFlag } from '../../modules/useToggleFlag'

import '../../scss/footer.scss'

export default (): React.ReactElement => {
  // toggleボタンの開閉状態を保持するフラグを格納
  const [toggleFlag, { toggle }]: [boolean, IToggleFlag] = useToggleFlag(
    useDispatch()
  )

  // ページのフッターを描画
  return (
    <footer>
      <div
        className={'toggle-button' + (toggleFlag ? ' reverse' : '')}
        onClick={toggle}
      >
        <ArrowIcon />
      </div>
      <div id='footer-background'>
        <div id='footer-container'>
          <ProfileArea />
          <CategoryArea />
          <LikeArticleArea />
        </div>
      </div>
    </footer>
  )
}

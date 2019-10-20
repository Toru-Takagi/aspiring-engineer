import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProfileArea from '../molecules/ProfileArea'
import CategoryArea from '../molecules/CategoryArea'
import LikeArticleArea from '../molecules/LikeArticleArea'
import ArrowIcon from '../atoms/icons/ArrowIcon'

import { IState } from '../../state/state'

import '../../scss/footer.scss'

export default () => {
  const dispatch: React.Dispatch<any> = useDispatch()
  const toggleFlag: boolean = useSelector((state: IState) => state.toggleFlag)
  const toggle: () => void = () => {
    let flag: boolean = !toggleFlag
    localStorage.setItem('toggleFlag', flag.toString())
    dispatch({
      type: 'SET_TOGGLE_FLAG',
      toggleFlag: flag,
    })
  }

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

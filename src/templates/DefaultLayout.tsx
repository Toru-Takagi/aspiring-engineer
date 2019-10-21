import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as PropTypes from 'prop-types'

import { IState } from '../state/state'

import Footer from '../components/organisms/Footer'

import '../scss/default-layout.scss'

interface IProps {
  children: PropTypes.ReactNodeLike
}

const Layout: React.FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props
  const dispatch: React.Dispatch<any> = useDispatch()
  const toggleFlag: boolean = useSelector((state: IState) => state.toggleFlag)
  const initToggleFlag: () => void = React.useCallback(() => {
    let flag: boolean =
      localStorage.getItem('toggleFlag') === 'true' ? true : false
    dispatch({
      type: 'SET_TOGGLE_FLAG',
      toggleFlag: flag,
    })
  }, [dispatch])
  const initLikeMap: () => void = React.useCallback(() => {
    let likeObject: string = localStorage.getItem('likeObject')
    dispatch({
      type: 'SET_LIKE_MAP',
      likeMap: new Map(
        Object.entries(JSON.parse(likeObject === null ? '{}' : likeObject))
      ),
    })
  }, [dispatch])
  React.useEffect(() => {
    initToggleFlag()
    initLikeMap()
  }, [initToggleFlag, initLikeMap])
  return (
    <div id='default-layout'>
      <main className={toggleFlag ? '' : 'footer-open'}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import { useState, Dispatch, SetStateAction, UIEvent } from 'react'

export interface IScrollFlag {
  scroll: (e: UIEvent<HTMLElement>) => void
}

interface IInitState {
  flag: boolean
}

export const useScrollFlag: (
  initState: IInitState
) => [boolean, IScrollFlag] = initState => {
  // 一度でもスクロールされたかをフラグを保持する
  const [scrollFlag, setScrollFlag]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(initState.flag)

  /**
   * 初めてスクロールされた時だけ、スクロールされたかのフラグを変更するメソッド
   * @param e
   */
  const scroll: (e: UIEvent<HTMLElement>) => void = e => {
    const isScrollTop: boolean = e.currentTarget.scrollTop === 0
    if (!isScrollTop && !scrollFlag) {
      setScrollFlag(true)
    }
  }

  return [scrollFlag, { scroll }]
}

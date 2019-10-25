import { useState, Dispatch, SetStateAction, UIEvent } from 'react'

export interface IScrollFlag {
  scroll: (e: UIEvent<HTMLElement>) => void
}

interface IInitState {
  flag: boolean
}

export const useScrollFlag = (
  initState: IInitState
): [boolean, IScrollFlag] => {
  const [scrollFlag, setScrollFlag]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(initState.flag)

  const scroll: (e: UIEvent<HTMLElement>) => void = (
    e: UIEvent<HTMLElement>
  ) => {
    const isScrollTop: boolean = e.currentTarget.scrollTop === 0
    if (!isScrollTop && !scrollFlag) {
      setScrollFlag(true)
    }
  }

  return [scrollFlag, { scroll }]
}

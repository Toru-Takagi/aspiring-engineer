import * as React from 'react'

interface IProps {
  timer: number
}

export default (props: IProps): [boolean] => {
  const [isShow, setIsShow]: [
    boolean,
    React.Dispatch<boolean>
  ] = React.useState<boolean>(false)

  React.useEffect((): void => {
    setTimeout((): void => {
      setIsShow(true)
    }, props.timer)
  }, [])

  return [isShow]
}

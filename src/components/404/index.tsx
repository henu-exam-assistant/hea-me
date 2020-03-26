import React, { useState, useEffect } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

import './index.scss'

interface IProps extends RouteComponentProps {
  redirectPath: string
}

export const NoMatch: React.FC<IProps> = props => {
  const [countDown, setCountDown] = useState(3)

  const { redirectPath } = props

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1)

      if (!countDown) {
        props.history.replace(redirectPath)
      }
    }, 1000)

    return () => { clearInterval(interval) }
  }, [countDown, props.history, redirectPath])

  return (
    <section className='no-match'>
      <p>404 NOT FOUND</p>
      <p>{countDown}秒后<Link to={redirectPath} replace>自动跳转</Link></p>
    </section>
  )
}

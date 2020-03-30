import React from 'react'

import './index.scss'

interface Props {
  className?: string
  style?: React.CSSProperties
  direction?: 'horizontal' | 'vertical'
}

export const Space: React.FC<Props> = props => {
  const { direction = 'horizontal' } = props

  return (
    <section className={`common-space common-space-${direction}`}>
      {(props.children as React.ReactNode[]).map((Elem, index) => (
        <div key={index} className={`common-space-${direction}-item`}>
          {Elem}
        </div>
      ))}
    </section>
  )
}

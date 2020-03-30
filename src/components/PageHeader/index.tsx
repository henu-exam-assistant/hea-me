import React from 'react'
import { Typography } from 'antd'
import { Space } from '../../components'
import './index.scss'

interface Props {
  text: string
}
const { Title } = Typography

export const PageHeader: React.FC<Props> = props => {
  return (
    <section className="common-page-header">
      <Title level={3} style={{ textAlign: 'left' }}>
        {props.text}
      </Title>
      <Space>{props.children}</Space>
    </section>
  )
}

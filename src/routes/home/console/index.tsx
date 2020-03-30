import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Row, Col, Card, Typography } from 'antd'
import { Config } from '../../../config'

import './index.scss'

const { Title } = Typography

export const Console: React.FC<RouteComponentProps> = props => {
  return (
    <section className="console">
      <Title style={{ textAlign: 'left' }}>Hi, Welcome back!</Title>
      <Row gutter={[24, 24]}>
        {Config.home.routes.slice(1).map((elem, index) => (
          <Col key={index} xs={4} sm={4} md={4} lg={6} xl={6}>
            <Card
              title={elem.name}
              onClick={() => props.history.push(elem.to)}
              style={{ cursor: 'pointer' }}
            >
              <p>{elem.desc}</p>
              <p>{props.children}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

import React from 'react'
import { Card, Form, Input, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.scss'

const { Title } = Typography

export const Login: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    // LoginParams
    console.log('Received values of form: ', values)
  }

  return (
    <section className='login'>
      <section className='login__body'>
        <Card className='login__body-card'>
          <Title level={2}>软件学院排考系统</Title>
          <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item name='username' rules={[{ required: true, message: '请输入你的工号！' }]}>
              <Input prefix={<UserOutlined />} placeholder='请输入你的工号' />
            </Form.Item>

            <Form.Item name='password' rules={[{ required: true, message: '请输入你的密码！' }]}>
              <Input prefix={<LockOutlined />} type='password' placeholder='请输入你的密码' />
            </Form.Item>

            <Form.Item style={{ textAlign: 'left' }}>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>记住账号</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' className='login__body-form-submit'>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </section>
    </section>
  )
}

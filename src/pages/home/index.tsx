import React, { useState, useEffect } from 'react'
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Avatar, Typography } from 'antd'
import { Console, Manage, Room, Teacher } from '../../routes/home'
import { NoMatch } from '../../components'

import { Config, ossBaseUrl } from '../../config'

import './index.scss'

const { Title } = Typography

type IProps = RouteComponentProps

const LeftNavConfig = Config.home.routes.reduce((Pre: LeftNavItem[], Cur) => {
  return [...Pre, { name: Cur.name, to: Cur.to, icon: <Cur.Icon /> }]
}, [])

const { Header, Footer, Sider, Content } = Layout

const HomePage: React.FC<IProps> = props => {
  const [collapsed, setCollapsed] = useState(true)
  const onCollapse = (collapsed: boolean): void => {
    setCollapsed(collapsed)
  }

  // 导航按钮随路由高亮
  const [curSelectedMenuItem, setcurSelectedMenuItem] = useState('0')
  useEffect(() => {
    const paths = Config.home.routes.reduce((pre: string[], cur) => [...pre, cur.to], [])
    const curPath = props.location.pathname
    if (paths.includes(curPath)) {
      setcurSelectedMenuItem(`${paths.indexOf(curPath)}`)
    }
  }, [props.location.pathname])

  return (
    <section className='page home-page'>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='home-page__logo' style={{ display: 'flex', minHeight: '64px' }}>
            <Avatar src={`${ossBaseUrl}/henu/henu-logo-white.png`}></Avatar>
          </div>

          <Menu theme='dark' selectedKeys={[curSelectedMenuItem]} mode='inline'>
            {LeftNavConfig.map((elem, index) => (
              <Menu.Item key={index} onClick={() => props.history.replace(elem.to)}>
                {elem.icon}
                <span>{elem.name}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>

        <Layout className='site-layout'>
          <Header className='site-layout-background home-page__header' style={{ padding: 0 }}>
            <Title level={3} style={{ color: '#fff' }}>
              软件学院排考系统
            </Title>
          </Header>

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ display: 'flex', margin: '16px 0' }}>
              {props.location.pathname
                .slice(1)
                .split('/')
                .map((path, index) => (
                  <Breadcrumb.Item key={index}>
                    <span style={{ textTransform: 'capitalize' }}>{path}</span>
                  </Breadcrumb.Item>
                ))}
            </Breadcrumb>

            <section className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route path='/home/console' component={Console} />
                <Route path='/home/teacher' component={Teacher} />
                <Route path='/home/room' component={Room} />
                <Route path='/home/manage' component={Manage} />
                <Redirect exact from='/home/' to='/home/console' />
                <Route render={props => <NoMatch {...{ ...props, redirectPath: '/home/console' }} />} />
              </Switch>
            </section>
          </Content>
          <Footer style={{ textAlign: 'center' }}>{Config.footer.content}</Footer>
        </Layout>
      </Layout>
    </section>
  )
}

export default HomePage

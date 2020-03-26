import React, { useState } from 'react'
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import { DashboardOutlined, TeamOutlined, TableOutlined, SolutionOutlined } from '@ant-design/icons'
import { Console, Manage, Room, Teacher } from '../../routes/home'
import { NoMatch } from '../../components'

import { Config } from '../../config'

import './index.scss'

interface IProps extends RouteComponentProps { }

const LeftNavConfig: { name: string, to: string, icon: React.ReactElement }[] = [
  { name: '管理中心', to: '/home/console', icon: <DashboardOutlined /> },
  { name: '教师管理', to: '/home/teacher', icon: <TeamOutlined /> },
  { name: '排考管理', to: '/home/room', icon: <TableOutlined /> },
  { name: '监考管理', to: '/home/manage', icon: <SolutionOutlined /> }
]

const { Header, Footer, Sider, Content } = Layout

const HomePage: React.FC<IProps> = props => {
  const [collapsed, setCollapsed] = useState(true)
  const onCollapse = (collapsed: boolean) => { setCollapsed(collapsed) }

  return (
    <section className='page home-page'>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' style={{ minHeight: '64px' }} />

          <Menu theme='dark' defaultSelectedKeys={['0']} mode='inline'>
            {LeftNavConfig.map((elem, index) => (
              <Menu.Item key={index} onClick={() => props.history.replace(elem.to)}>{elem.icon}<span>{elem.name}</span></Menu.Item>
            ))}
          </Menu>
        </Sider>

        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }} />

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ display: 'flex', margin: '16px 0' }}>
              {props.location.pathname.slice(1).split('/').map((path, index) => (
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
                <Route render={(props) => <NoMatch {...{ ...props, redirectPath: '/home/console' }} />} />
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

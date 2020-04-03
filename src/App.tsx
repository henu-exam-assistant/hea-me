import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import tcb from 'tcb-js-sdk'

import HomePage from './pages/home'
import LoginPage from './pages/login'
import { NoMatch } from './components'

import './App.scss'

function App(): JSX.Element {
  useEffect(() => {
    const app = tcb.init({
      env: 'cross-env-1ab71b',
    })

    const auth = app.auth()

    async function login() {
      const provider = auth.anonymousAuthProvider()

      await provider.signIn()
      // 匿名登录成功检测登录状态isAnonymous字段为true
      const loginState = await auth.getLoginState()
      console.log(loginState) // true

      app
        .callFunction({
          name: 'basic',
          // 传给云函数的参数
          data: '',
          query: '',
          parse: true,
        })
        .then((res: any) => {
          console.log(res)
        })
        .catch((error: any) => {
          console.log(error)
        })
    }

    login()
  }, [])

  return (
    <section className='App'>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={HomePage} /> */}
          <Redirect exact from='/' to='/home' />
          <Route path='/home' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route render={props => <NoMatch {...{ ...props, redirectPath: '/home' }} />} />
        </Switch>
      </BrowserRouter>
    </section>
  )
}
export default App

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/home'
import LoginPage from './pages/login'
import { NoMatch } from './components'

import './App.scss'

function App () {
  return (
    <section className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </section>
  )
}
export default App

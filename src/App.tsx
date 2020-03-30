import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/home'
import LoginPage from './pages/login'
import { NoMatch } from './components'

import './App.scss'

function App(): JSX.Element {
  return (
    <section className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={HomePage} /> */}
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route
            render={props => (
              <NoMatch {...{ ...props, redirectPath: '/home' }} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </section>
  )
}
export default App

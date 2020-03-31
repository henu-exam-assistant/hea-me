import React from 'react'
import { Login } from '../../routes/login'
import './index.scss'

const LoginPage: React.FC = () => {
  return (
    <section className='page login-page'>
      <Login />
    </section>
  )
}

export default LoginPage

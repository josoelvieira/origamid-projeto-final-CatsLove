import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCriar from './LoginCriar'
import LoginPerdeu from './LoginPerdeu'
import LoginReset from './LoginResetar'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/criar" element={<LoginCriar/>} />
        <Route path="/perdeu" element={<LoginPerdeu/>} />
        <Route path="/resetar" element={<LoginReset/>} />
      </Routes>
    </div>
  )
}

export default Login
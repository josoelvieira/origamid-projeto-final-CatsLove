import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCriar from './LoginCriar'
import LoginPerdeu from './LoginPerdeu'
import LoginReset from './LoginResetar'
import { UserContext } from '../../UserContext'

const Login = () => {
  const { login } = useContext(UserContext)

  if(login === true) return <Navigate to="/conta"/>
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
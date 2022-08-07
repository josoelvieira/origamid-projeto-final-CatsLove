import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm';
import { PASSWORD_RESET } from '../../api';

const LoginResetar = () => {
  const [ login, setLogin] = useState('')
  const [ key, setKey] = useState('')
  const password = useForm('') //pode colocar "password" para validar uma senha forte

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)

  },[])
  async function handleSubmit (event) {
    const {url, options} = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Input label="Nova senha" type='pasword' name='password '/>
      <Button>Resetar</Button>
      </form>
    </div>
  )
}

export default LoginResetar
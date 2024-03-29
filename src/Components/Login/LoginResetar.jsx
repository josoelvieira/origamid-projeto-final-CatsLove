import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm';
import useFetch  from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router-dom';

const LoginResetar = () => {
  const [ login, setLogin] = useState('')
  const [ key, setKey] = useState('')
  const password = useForm('') //pode colocar "password" para validar uma senha forte
  const { error, loading, request} = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)

  },[])

  async function handleSubmit (event) {
    event.preventDefault()
    if(password.validate()) {
    const {url, options} = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })
    const {response } = await request (url, options)
    if(response.ok) navigate('/login')
    
  }}
  return (
    <section className='animeLeft'>
      <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
      <Input label="Nova senha" type='password' name='password' {...password}/>
      {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button> }
      
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginResetar
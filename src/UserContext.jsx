import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET} from './api'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() =>{
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if(token) {
        try{
          setError(null)
          setLoading(true)
        const {url, options} = TOKEN_VALIDATE_POST(token)
        const response = await fetch(url, options)
        if(!response.ok) throw new Error('Token invalido')
        await getUser(token)
      }catch(err){
        userLogout()
      }finally {
        setLoading(false)
      }
      }}
    autoLogin()
  },[])
async function getUser (token) {
  const {url, options} = USER_GET(token)
  const response = await fetch(url, options)
  const json =  await response.json()
  setData(json)
  setLogin(true)

}

async function userLogin (username, password) {
  try{
    setError(null)
    setLoading(true)
  const {url, options} = TOKEN_POST({username, password})
  const tokenRes = await fetch(url, options)
  if(!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`)
  const {token} = await tokenRes.json()
  window.localStorage.setItem('token', token)
  getUser(token)
  } catch (err) {
    setError(err.message)
    setLogin(false)
  } finally {
    setLoading(false)
  }
}
async function userLogout() {
  setData(null)
  setError(null)
  setLoading(false)
  setLogin(false)
  window.localStorage.removeItem('token')
}

  return <UserContext.Provider value={{userLogin, data,userLogout}}>{children}</UserContext.Provider>
}
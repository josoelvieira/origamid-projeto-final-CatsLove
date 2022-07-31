import React from 'react'
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const UserHeader = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
        case '/conta/postar':
        setTitle('Postar foto')
        break;
        case '/conta/stats':
        setTitle('Estatisticas')
        break;
        default:
          setTitle('Minha Fotos')
    }
    
  },[location])

  return (
    <header className={styles.header}>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav/>
    </header>
  )
}

export default UserHeader
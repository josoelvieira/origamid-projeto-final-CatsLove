import React from 'react'
import styles from './Footer.module.css'
import {ReactComponent as Cats} from '../Assets/cat-svgrepo-com.svg'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Cats/>
      <p>Cats Love - Todos direitos resevados</p>
    </footer>
  )
}

export default Footer
import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CatsLove | Página não encontrada</title>
            </Helmet>
    <section className='container mainContainer'>
        <h1 className='title'>Erro 404</h1>
        <p>Página não encontrada</p>
      
    </section>
    </>
  )
}

export default NotFound

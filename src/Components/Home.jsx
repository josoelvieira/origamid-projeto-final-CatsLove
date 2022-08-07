import React from 'react'
import { Helmet } from 'react-helmet'
import Feed from './Feed/Feed'

const Home = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>CatsLove | Home</title>
    </Helmet>
    <section className='container mainContainer'>
      <Feed/>
    </section>
    </>
  )
}

export default Home
import React from 'react'
import { Helmet } from 'react-helmet'
import { VictoryPie, VictoryBar} from "victory";

const UserStats = () => {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CatsLove | Estatisticas</title>
            </Helmet>
    <section>
      <h1 className='title'>Minhas Estatisticas</h1>
      <VictoryPie/>
      <VictoryBar/>
    </section>
    </>
  )
}

export default UserStats
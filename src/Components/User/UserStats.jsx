import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'
//import { VictoryPie, VictoryBar} from "victory";
import { STATS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

const UserStats = () => {
  const {data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData(){
      const {url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  },[request])
  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data)
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CatsLove | Estatisticas</title>
            </Helmet>
    <section>
      
    </section>
    </>
  )
  else return null
}

export default UserStats
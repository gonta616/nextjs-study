import React from 'react'
import Layout from '../components/layout'
import { parseCookies, setCookie } from 'nookies'
import axios from 'axios'

const Cookie = () => {
  const handleClick = async (e) => {
    // Simply omit context parameter.
    // Parse
    const cookies = parseCookies()
    console.log({ cookies })

    // Set
    setCookie(null, 'fromClient1', 'value', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })
    setCookie(null, 'fromClient2', 'value', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })
    const result = await axios.get('/api/cookie')
    console.log(result)
  }

  return (
    <Layout>
      <button onClick={handleClick}>Set Cookie</button>
    </Layout>
  )
}

export default Cookie

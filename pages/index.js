import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'

const Home = ({ data }) => {
  return (
    <Layout>
      <p>{data}</p>
      <p>Hello Next.js</p>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const res = await axios.get('/api/demo')
//   // Pass data to the page via props
//   return { props: { data: res.data } }
// }

export default Home

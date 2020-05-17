import React from 'react'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
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

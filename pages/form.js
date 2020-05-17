import React, { useState } from 'react'
import Layout from '../components/layout'
import { TextField, FormControl } from '@material-ui/core'
import axios from 'axios'

const List = () => {
  const [title, setTitle] = useState('')
  const [banner, setBanner] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post('/api/demo', { title })
    // TODO エラーハンドリング
    setBanner(result.data.msg)
  }

  const handleChangeTitle = (e) => {
    e.preventDefault()
    console.log(title)
    setTitle(e.target.value)
  }

  return (
    <Layout>
      {banner && <div>{banner}</div>}
      <form onSubmit={handleSubmit} role="form">
        <TextField id="title" type="string" onChange={handleChangeTitle} />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default List

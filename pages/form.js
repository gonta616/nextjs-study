import React, { useState } from 'react'
import Layout from '../components/layout'
import {
  FormControl,
  TextField,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Checkbox
} from '@material-ui/core'
import axios from 'axios'

const Form = () => {
  const [title, setTitle] = useState('')
  const [radio, setRadio] = useState('male')
  const [check, setCheck] = useState(true)
  const [date, setDate] = useState(Date.now())
  const [select, setSelect] = useState(0)
  const [aSwitch, setSwitch] = useState(0)

  const [banner, setBanner] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post('/api/demo', { title, radio, check, date, select, aSwitch })
    setBanner(result.data.msg)
  }

  const handleChange = (e) => {
    const fn = {
      title: { fn: setTitle, value: e.target.value },
      radio: { fn: setRadio, value: e.target.value },
      check: { fn: setCheck, value: e.target.checked },
      date: { fn: setDate, value: e.target.checked },
      select: { fn: setSelect, value: e.target.value },
      aSwitch: { fn: setSwitch, value: e.target.value }
    }

    e.preventDefault()
    fn[e.target.name].fn(fn[e.target.name].value)
    console.log(title, radio, check, date, select, aSwitch)
  }

  return (
    <Layout>
      {banner && <div>{banner}</div>}
      <form onSubmit={handleSubmit} role="form">
        <FormControl>
          <TextField name="title" id="title" type="string" onChange={handleChange} />
          <FormControl>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="radio" value={radio} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={<Checkbox checked={check} onChange={handleChange} name="check" />}
            label="Primary"
          />
          <button type="submit">Submit</button>
        </FormControl>
      </form>
    </Layout>
  )
}

export default Form

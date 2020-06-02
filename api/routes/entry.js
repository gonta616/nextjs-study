const express = require('express')
const router = express.Router()
const EntryModel = require('../../models/entry')

router.get('/', (req, res, next) => {
  res.json(`GET OK! query is ${JSON.stringify(req.query)}`)
})

router.post('/', async (req, res, next) => {
  try {
    const entry = new EntryModel()
    entry.title = 'タイトル1'
    entry.description = '概要1'
    const result = await entry.save()
    res.json(result)
  } catch (ex) {
    res.json(ex.message)
  }
  
})

module.exports = router

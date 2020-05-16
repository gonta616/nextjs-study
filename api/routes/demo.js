const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json(`GET OK! query is ${JSON.stringify(req.query)}`)
})

router.get('/:id', (req, res, next) => {
  res.json(`GET OK! params is ${JSON.stringify(req.params)}`)
})

router.post('/', (req, res, next) => {
  res.json(`POST OK! params is ${JSON.stringify(req.body)}`)
})

module.exports = router

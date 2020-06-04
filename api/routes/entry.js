const express = require('express')
const router = express.Router()
const EntryModel = require('../../models/entry')
const UserModel = require('../../models/user')

router.get('/', async (req, res, next) => {
  try {
    const query = EntryModel.find().populate('_user')
    const entries = await query.exec()
    res.json(entries)
  } catch (ex) {

  }
})

router.post('/', async (req, res, next) => {
  try {
    const entry = new EntryModel()
    entry.title = req.body.title
    entry.description = req.body.description
    const query = UserModel.findOne({ username: req.body.username })
    const user = await query.exec()
    entry._user = user

    const result = await entry.save()
    res.json(result)
  } catch (ex) {
    res.json(ex.message)
  }
})

module.exports = router

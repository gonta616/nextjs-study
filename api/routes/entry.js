const express = require('express')
const router = express.Router()
const EntryModel = require('../../models/entry')
const UserModel = require('../../models/user')
const TagModel = require('../../models/tag')

router.get('/', async (req, res, next) => {
  try {
    const query = EntryModel.find().populate('_user').populate('_tags')
    const entries = await query.exec()
    res.json(entries)
  } catch (ex) {
    res.json(ex.message)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const entry = new EntryModel()
    entry.title = req.body.title
    entry.description = req.body.description
    // ユーザー One-To-Manyを実現
    const user = await UserModel.findOne({ username: req.body.username }).exec()
    if (user) {
      entry._user = user
    }
    // タグ Many-To-Manyを実現
    const tag = await TagModel.findOne({ name: req.body.tagname }).exec()
    if (tag) {
      entry._tags.push(tag)
    }
    const result = await entry.save()
    res.json(result)
  } catch (ex) {
    res.json(ex.message)
  }
})

module.exports = router

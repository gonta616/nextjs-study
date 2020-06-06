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

router.get('/fullText/:entryid', async (req, res, next) => {
  try {
    const id = req.params.entryid
    const entry = await EntryModel.findById(id).exec()
    res.json(entry.fullText())
  } catch (ex) {

  }
})

router.post('/', async (req, res, next) => {
  try {
    let entry = new EntryModel()
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
    entry = await entry.save()
    if (tag) {
      tag._entries.push(entry)
      await tag.save()
    }
    res.json(entry)
  } catch (ex) {
    res.json(ex.message)
  }
})

module.exports = router

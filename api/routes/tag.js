const express = require('express')
const router = express.Router()
const TagModel = require('../../models/tag')

router.get('/', async (req, res, next) => {
  try {
    const query = TagModel.find().populate('_entries')
    const entries = await query.exec()
    res.json(entries)
  } catch (ex) {
    res.json(ex.message)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const tag = new TagModel()
    tag.name = req.body.name

    const result = await tag.save()
    res.json(result)
  } catch (ex) {
    res.json(ex.message)
  }
})

module.exports = router

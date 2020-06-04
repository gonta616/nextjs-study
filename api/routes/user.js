const express = require('express')
const router = express.Router()
const UserModel = require('../../models/user')

router.get('/login', async (req, res, next) => {
  try {
    const query = UserModel.findOne({ username: req.query.name })
    const user = await query.exec()
    if (user) {
      req.session.user = user
    }

    res.json(user)
  } catch (ex) {
    res.json(ex.message)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const query = UserModel.find({ name: req.query.name })
    const users = await query.exec()
    res.json(users)
  } catch (ex) {
    res.json(ex.message)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const user = new UserModel()
    console.log(req.body)
    user.username = req.body.name
    const result = await user.save()
    res.json(result)
  } catch (ex) {
    res.json(ex.message)
  }
})

module.exports = router

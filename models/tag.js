const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
  name: { type: String, required: true },
  entries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entry'
    }
  ]
})

module.exports = mongoose.model('Tag', tagSchema)

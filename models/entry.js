const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entrySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ]
})
entrySchema.methods.fullText = () => {
  return `title: ${this.title} desc: ${this.description}`
}

module.exports = mongoose.model('Entry', entrySchema)

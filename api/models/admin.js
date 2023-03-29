const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  user: {
    type: Schema.ObjectId,
    required: [true, 'user_missing'],
    unique: true,
  },
})

// static method for admin
schema.statics.admin = async function (id) {
  const data = await this.findOne({ user: id })
  if (data) return data

  throw Error('admin_notfounded')
}

module.exports = mongoose.model('admin', schema)

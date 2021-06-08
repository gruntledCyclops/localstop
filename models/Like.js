const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')
require('mongoose-type-email')

// schema
const likeSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
    required: true
  }
}, { timestamps: true })

// model
const likeModel = mongoose.model('Like', likeSchema)

// export
module.exports = likeModel
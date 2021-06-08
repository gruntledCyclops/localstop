const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')
require('mongoose-type-email')

// schema
const reviewSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
    require: true
  },
  cost: {
    type: Number,
    require: true
  },
  experience: {
    type: Boolean,
    require: true
  }
}, { timestamps: true })

// model
const reviewModel = mongoose.model('Review', reviewSchema)

// export
module.exports = reviewModel
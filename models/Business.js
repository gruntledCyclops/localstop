const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')
require('mongoose-type-email')

// schema
const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String    
  },
  suburb:{
    type: String
  },
  state:{
    type:String
  },
  category: {
    type: String
  },
  privacy:{
    type: Boolean,
    required: true
  },
  avatar: {
    type: String 
  },
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

// model
const businessModel = mongoose.model('Business', businessSchema)

// export
module.exports = businessModel
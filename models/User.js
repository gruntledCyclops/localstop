const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')
require('mongoose-type-email')

// schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true    
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String    
  },
  phone: {
    type: String
  },
  userLevel:{
    type: Number,
    required: true,
    default: 1
  },
  contact:{
    type: String,
    default: 'new and liked',
    required: true
  },
  notification:{
    type: String,
    default: 'email',
    required: true
  },
  newUser:{
    type: Boolean,
    default: true,
    required: true
  },
  bio:{
    type:String
  }
}, { timestamps: true })

// encrypt password field on save
userSchema.pre('save', function(next) {
  // check if password is present and is modifed  
  if( this.password && this.isModified() ){
      this.password = Utils.hashPassword(this.password);
  }
  next()
})

// model
const userModel = mongoose.model('User', userSchema)

// export
module.exports = userModel
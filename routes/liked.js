const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Like = require('./../models/Like')
const path = require('path')
const User = require('./User.js')
const Business = require('./Business.js')


// PUT - add favouriteHaircut --------------------------------------
router.put('/addLike/', Utils.authenticateToken, (req, res) => {  
  // validate check
  if(!req.body.businessId){
    return res.status(400).json({
      message: "No business specified"
    })
  }
  // create new user       
  let newLike = new Like(req.body)
  newLike.save()
    .then(like => {        
      // success!  
      // return 201 status with user object
      return res.status(201).json(like)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send({
        message: "Problem adding like",
        error: err
      })
    })
})

// GET - get all likes -------------------------------------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Like.find({user: req.user._id}).populate('user').populate('business')
    .then(likes => {
      res.json(likes)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Couldn't get likes",
        error: err
      })
    })
})


// POST - create new likes --------------------------------------
router.post('/', (req, res) => {
  // check account with email doen't already exist
  Like.findOne({user: req.user._id})
  .then(like => {
    if( like != null ){
      return res.status(400).json({
        message: "Already liked"
      })
    }
  })
})


module.exports = router
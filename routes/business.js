const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Business = require('./../models/Business')
const path = require('path')

// GET - get all businesses -------------------------------------------------------
router.get('/', (req, res) => {
  Business.find().populate('owner')
    .then(businesses => {
      res.json(businesses)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Couldn't get businesses",
        error: err
      })
    })
})

// GET - get single business -------------------------------------------------------
router.get('/:id',  (req, res) => {
  // if(req.user._id != req.business.owner){
  //   return res.status(401).json({
  //     message: "Not authorised"
  //   })
  // }

  Business.findById(req.params.id)
    .then(business => {
      res.json(business)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Couldn't get business",
        error: err
      })
    })
})

// POST - create new business --------------------------------------
router.post('/', (req, res) => {
  // validate request
console.log(req.body)
  // if(Object.keys(req.body).length === 0){   
  //   return res.status(400).send({message: "Business content can not be empty"})
  // }
  // create new business       
  let newBus = new Business(req.body)
  newBus.save()
    .then(business => {        
      // success!  
      // return 201 status with user object
      return res.status(201).json(business)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send({
        message: "Problem creating business",
        error: err
      })
    })
  })

module.exports = router
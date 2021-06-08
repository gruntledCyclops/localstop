const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Review = require('./../models/Review')
const path = require('path')

// GET - get all businesses -------------------------------------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Review.find().populate('user').populate('business')
    .then(reviews => {
      res.json(reviews)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Couldn't get reviews",
        error: err
      })
    })
})

module.exports = router
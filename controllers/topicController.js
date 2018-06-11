const express = require('express')
const router = express.Router()
const Topic = require('../models/topic')

router.get('/', (req, res) => {

    // Find all Topics
    Topic
      .find()
      .then((listOfTopic) => {
  
        // Once you have all Topic, then render out index page homeworks is all
        // pieces of data that match the Homework Model
        res.render('topic/index', { listOfTopic: listOfTopic })
      })
      .catch((err) => res.send(err))
  
  })
  


  module.exports = router;

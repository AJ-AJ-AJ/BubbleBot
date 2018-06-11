const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/', (req, res) => {

    // Find all articles
    Article
      .find()
      .then((listOfArticles) => {
  
        // Once you have all Topic, then render out index page homeworks is all
        // pieces of data that match the Homework Model
        res.render('article/index', { listOfArticles: listOfArticles })
      })
      .catch((err) => res.send(err))
  
  })
  


  module.exports = router;
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

router.get('/new', (req, res) => {
  res.render('topic/new', {
    title: "New Topic",
  })
})

router.post('/', (req, res) => {
  const newTopic = req.body
  Topic
    .create(newTopic)
    .then(() => {
      res.redirect('/topic')
    })
})

router.get('/:id', (req, res) => {
  Topic
    .findById(req.params.id)
    .then((topic) => {
      res.render('topic/show', { 
        topic,
        title: `${topic.name}`,
      })
    })
})

router.get('/:id/edit', (req, res) => {
  Topic
    .findById(req.params.id)
    .then((topic) => {
      // const id = req.params.id
      res.render('topic/edit', { topic, title: 'Edit Topic' })
    })
})

router.put('/:id', (req, res) => {
  Topic
    .findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/topic/${req.params.id}`)
  })
})

router.delete('/:id', (req, res) => {
  Topic.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/topic')
    })
})

module.exports = router;

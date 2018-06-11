const express = require('express')
const router = express.Router()
const Comments = require('../models/comments')

/* GET Comments listing. */
// localhost/homework
router.get('/', (req, res) => {

  // Find all Comments
  Comments
    .find()
    .then((listOfComments) => {

      // Once you have all comments, then render out index page homeworks is all
      // pieces of data that match the Homework Model
      res.render('comments/index', { listOfComments: listOfComments })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('comments/new')
})

// CREATE Route ********
router.post('/', (req, res) => {
  const newComment = req.body
  Comments
    .create(newComment)
    .then(() => {
      res.redirect('/comments')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Comments
    .findById(req.params.id)
    .then((commentBody) => {
      res.render('comments/show', { commentBody })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Comments
    .findById(req.params.id)
    .then((jessica) => {
      res.render('comments/edit', { commentAuthor: jessica })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  Comments.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/comments/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Comments.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/comments')
    })
})

module.exports = router
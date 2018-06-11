const mongoose = require('mongoose')
const Topic = require('../models/topic')
const Article = require('../models/article')
const Comments = require('../models/comments')

// Connect to Database
mongoose.connect('mongodb://localhost/BubbleBot')
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })

// Remove old Topic Data
    Topic.remove()
        .then(() => {

        // create new test Topic data
        const topicA = new Topic({
            name: 'Industry Leaders',
            description: 'The Lady Pioneers in Tech'
        })
        const topicB = new Topic({
            name: 'Tech Trends',
            description: 'What is new in tech?'
        })
        const topicC = new Topic({
            name: 'Startups',
            description: 'Startups to watch'
        })

        const topics = [ topicA, topicB, topicC ]

        // save test data
            return Topic.insertMany(topics)
          })
          .then(() => {

        // close the database
        mongoose.connection.close()
    })
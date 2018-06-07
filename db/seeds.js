const mongoose = require('mongoose')
const Homework = require('../models/Homework')

// Connect to Database
mongoose.connect('mongodb://localhost/homework-helper')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

// Remove old Homework Data
Homework.remove()
  .then(() => {

    // create new test Homework data
    const homework1 = new Homework({
      title: 'Pirates Read/Create',
      description: 'pirates',
      subject: 'express',
      createdBy: 'bob'
    })
    const homework2 = new Homework({
      title: 'Pirates update/dleete',
      description: 'more pirates',
      subject: 'express',
      createdBy: 'joof'
    })
    const homework3 = new Homework({
      title: 'Pizza Express',
      description: 'PIZZA',
      subject: 'React',
      createdBy: 'sal'
    })
    const homework4 = new Homework({
      title: 'final projexct',
      description: 'everything',
      subject: 'rails',
      createdBy: 'bryan'
    })

    const homeworks = [ homework1, homework2, homework3, homework4 ]

    // save test data
    return Homework.insertMany(homeworks)
  })
  .then(() => {

    // close the database
    mongoose.connection.close()
  })
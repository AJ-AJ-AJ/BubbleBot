const mongoose = require('mongoose');
const bubbleSchema = require('../db/schemas/schema');

const Homework = mongoose.model('homework', homeworkSchema);

module.exports = Homework;
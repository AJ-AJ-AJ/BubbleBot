var Schema = require('mongoose').Schema;

const commentsSchema = new Schema({
    title: String,
    author: String,
    comment: String,
    date: Date
})

module.exports = commentsSchema;
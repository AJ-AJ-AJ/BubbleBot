var Schema = require('mongoose').Schema;
const commentsSchema = require('./commentsSchema')

const articleSchema = new Schema({
    link: String,
    title: String,
    summary: String,
    comments: [ commentsSchema ]
})

module.exports = articleSchema;
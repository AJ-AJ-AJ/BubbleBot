var Schema = require('mongoose').Schema;
const articleSchema = require('./articleSchema')

const topicSchema = new Schema({
    name: String,
    description: String,
    articles: [ articleSchema ]
})

module.exports = topicSchema;
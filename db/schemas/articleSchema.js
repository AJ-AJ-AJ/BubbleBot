var Schema = require('mongoose').Schema;

const articleSchema = new Schema({
    link: String,
    title: String,
    summary: String
})

module.exports = articleSchema;
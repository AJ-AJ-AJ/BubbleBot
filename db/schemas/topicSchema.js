var Schema = require('mongoose').Schema;

const topicSchema = new Schema({
    name: String,
    description: String,
})

module.exports = topicSchema;
const mongoose = require('mongoose');
const topicSchema = require('../db/schemas/topicSchema');

const Topic = mongoose.model('topic', topicSchema);

module.exports = Topic;
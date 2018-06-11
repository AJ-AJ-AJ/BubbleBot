const mongoose = require('mongoose');
const articleSchema = require('../db/schemas/articleSchema');

const Article = mongoose.model('article', articleSchema);

module.exports = Article;
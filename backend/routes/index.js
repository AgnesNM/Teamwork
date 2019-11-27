const postArticles = require('./create_articles');
const auth = require('../middleware/auth');

module.exports = app => { 
app.use('/v1/auth/create_article', postArticles, auth); 
}


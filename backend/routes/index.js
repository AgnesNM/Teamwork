const auth = require('../middleware/auth');
const employees = require('./employee');
const signIn = require('./sign_in');
const postGifs = require('./post_gifs');
const postArticles = require('./create_articles');


module.exports = app => {  
  app.use('/v1/create_employee', employees); 
  app.use('/v1/sign_in', signIn);   
  app.use('/v1/auth/post_gif', postGifs, auth); 
  app.use('/v1/auth/create_article', postArticles, auth);
}



const auth = require('../middleware/auth');
const employees = require('./employee');
const signIn = require('./sign_in');
const postGifs = require('./post_gifs');


module.exports = app => {  
  app.use('/v1/create_employee', employees); 
  app.use('/v1/sign_in', signIn);   
  app.use('/v1/auth/post_gif', postGifs, auth); 
}


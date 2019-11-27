const auth = require('../middleware/auth');
const employees = require('./employee');
const signIn = require('./sign_in');


module.exports = app => {  
  app.use('/v1/create_employee', employees); 
  app.use('/v1/sign_in', signIn);   
}




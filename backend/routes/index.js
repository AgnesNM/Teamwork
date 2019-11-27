const auth = require('../middleware/auth');
const employees = require('./employee');


module.exports = app => {  
  app.use('/v1/auth/create_employee', auth, employees);   
}
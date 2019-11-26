const employees = require('./employee');
const auth = require('../middleware/auth');

module.exports = app => {  
  app.use('/v1/auth/create_employee', auth, employees);   
}
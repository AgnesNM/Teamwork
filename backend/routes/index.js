const employees = require('./employee');


module.exports = app => {  
  app.use('/v1/create_employee', employees);   
}
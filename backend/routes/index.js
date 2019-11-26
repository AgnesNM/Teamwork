routes/index.js

const employees = require('./employee');

module.exports = app => { 
app.use('/v1/log_in', employees); 
}

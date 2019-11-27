const signIn = require('./sign_in');

module.exports = app => { 
app.use('/v1/sign_in', signIn); 
};
const postGifs = require('./post_gifs');
const auth = require('../middleware/auth');

module.exports = app => { 
app.use('/v1/auth/post_gif', postGifs, auth); 
}

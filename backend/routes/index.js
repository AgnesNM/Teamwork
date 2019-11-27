const postGifs = require('./post_gifs');

module.exports = app => { 
app.use('/v1/post_gif', postGifs); 
}

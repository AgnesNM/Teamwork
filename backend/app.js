<<<<<<< HEAD
const express = require('express');
const { Pool } = require('pg');

<<<<<<< HEAD
<<<<<<< HEAD
const createEmpRoutes = require('./routes/index');
=======
const signInRoutes = require('./routes');
>>>>>>> admin/emp_sign_in
=======
const createGifRoutes = require('./routes/index');
>>>>>>> emp_post_gifs
=======
//app.js
const express = require('express');
const { Pool } = require('pg');

const createArticlesRoutes = require('./routes/index');
>>>>>>> emp_create_articles
const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  connectionString: connectionString,
=======
connectionString: connectionString,
>>>>>>> admin/emp_sign_in
=======
connectionString: connectionString,
>>>>>>> emp_post_gifs
=======
connectionString: connectionString,
>>>>>>> emp_create_articles
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
createEmpRoutes(app)
=======
signInRoutes(app);
>>>>>>> admin/emp_sign_in
=======
createGifRoutes(app)
>>>>>>> emp_post_gifs

module.exports = app;
=======
createArticlesRoutes(app)

module.exports = app;

>>>>>>> emp_create_articles

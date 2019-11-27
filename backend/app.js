const express = require('express');
const { Pool } = require('pg');

<<<<<<< HEAD
const createEmpRoutes = require('./routes/index');
=======
const signInRoutes = require('./routes');
>>>>>>> admin/emp_sign_in
const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
<<<<<<< HEAD
  connectionString: connectionString,
=======
connectionString: connectionString,
>>>>>>> admin/emp_sign_in
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
createEmpRoutes(app)
=======
signInRoutes(app);
>>>>>>> admin/emp_sign_in

module.exports = app;
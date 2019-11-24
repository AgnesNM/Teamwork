const express = require('express');
const { Pool } = require('pg');

const createEmpRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
  connectionString: connectionString,
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

createEmpRoutes(app)

module.exports = app;
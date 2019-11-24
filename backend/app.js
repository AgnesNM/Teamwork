const { Pool } = require('pg');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
  connectionString: connectionString,
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;

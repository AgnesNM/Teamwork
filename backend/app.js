//app.js
const express = require('express');
const { Pool } = require('pg');

const createArticlesRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

createArticlesRoutes(app)

module.exports = app;


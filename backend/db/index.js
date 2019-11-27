const { Pool } = require('pg');

const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});


module.exports = {
  query: (text, params) => pool.query(text, params),
}
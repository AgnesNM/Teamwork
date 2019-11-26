const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

const { Pool } = require('pg');

const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});

router.get('/', (req, res, next) => { 
const text = 'SELECT * FROM employees WHERE id = $1';
const {rows} = db.query(text, [req.params.emp_id]);
if(err){ 
return res.status(400).send(error.stack); 
} else {
return res.status(201).send(rows[0]); 
} 
});


module.exports = router;
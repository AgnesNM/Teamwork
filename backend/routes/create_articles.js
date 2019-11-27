const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});

router.post('/', (req, res, next) => { 
const values = [
req.body.article_id,
req.body.article_title,
req.body.article_author,
req.body.date_created,
req.body.category
];
const text = 'INSERT INTO articles(article_id,article_title,article_author,date_created, category) VALUES($1,$2,$3,$4,$5) RETURNING *';
pool.query(text,values, (err,res) => {
if(err){ 
console.log(err.stack); 
} else {
console.log(res.rows[0]); 
} 
});
});

module.exports = router;

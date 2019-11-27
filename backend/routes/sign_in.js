const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();
const bodyParser = require('body-parser');

const { Pool } = require('pg');
const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});

router.get('/', (req, res, next) => { 
    
    const text = 'SELECT * FROM employees';
    pool.query(text, (err,res) => {
        if(err){
            console.log(err.stack); 
        } else {
            console.log(res.rows); 
        }
    });           
});

module.exports = router;

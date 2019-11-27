const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();
const bodyParser = require('body-parser');

const { Pool } = require('pg');
const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});

router.get ('/:id', (req, res, next) => {
    const text = 'SELECT * FROM employees WHERE id=$1';        
    pool.query(text, [req.params.id], (err,res) => {
        if(err){
            console.log(err.stack);
        } else {
            console.log(res.rows[0]);
        }
    });              
                
});
     
    
module.exports = router;
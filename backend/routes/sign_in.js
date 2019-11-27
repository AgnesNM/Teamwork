const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();
const bodyParser = require('body-parser');

const { Pool } = require('pg');
const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});

router.get ('/:id', async (req, res, next) => {
    const text = 'SELECT * FROM employees WHERE id=$1';       
    const { rows } = await db.query(text, [req.params.id], (err,res) => {
        if(err){
            res.status(400).send(err.stack);
        } else {
            res.status(200).send(res.rows[0]);
        }
    });              
                
});
     
    
module.exports = router;
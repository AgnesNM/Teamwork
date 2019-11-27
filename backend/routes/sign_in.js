const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();
const bodyParser = require('body-parser');

const { Pool } = require('pg');
const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});

router.get('/:emp_id', (req, res, next) => { 
    const {emp_id} = req.params;
    const text = 'SELECT * FROM employees WHERE emp_id = $1';
    const {rows} = db.query(text, [emp_id], (err,res) => {
        if(err){
            return res.status(400).send(error.stack); 
        } else {
            return res.status(201).send(rows[0]); 
        }
    });           
});

module.exports = router;
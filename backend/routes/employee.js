const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

const { Pool } = require('pg');

const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = router;

router.post('/', async (req, res, next) => {
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password,      
    req.body.gender,
    req.body.job_role,
    req.body.department,
    req.body.address,   
    req.body.emp_id,   
    req.body.db_role
  ];
  const text = 'INSERT INTO employees(first_name,last_name,email,password, gender, job_role, department, address, emp_id, db_role) VALUES($1,$2,$3,$4,$5, $6, $7, $8, $9, $10) RETURNING *';
  
  const {rows} = await db.query(text,values, (err,res) => {
    if(err){           
        return res.status(400).send(error.stack); 
    }  else {
      return res.status(201).send(rows[0]);        
      }        
    });
});



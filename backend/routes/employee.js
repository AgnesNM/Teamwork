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
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        hash,      
        req.body.gender,
        req.body.job_role,
        req.body.department,
        req.body.address,   
        req.body.emp_id,   
        req.body.db_role
    ];
      const text = 'INSERT INTO employees(first_name,last_name,email,password, gender, job_role, department, address, emp_id, db_role) VALUES($1,$2,$3,$4,$5, $6, $7, $8, $9, $10) RETURNING *';
      
      const {rows} = db.query(text,values, (err,res) => {
        if(err){           
            return res.status(400).send(error.stack); 
        }  else {
          return res.status(201).send(rows[0]);        
          }        
        });
    }
  )
 });


module.exports = router;

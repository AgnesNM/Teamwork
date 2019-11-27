const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const bodyParser = require('body-parser');
var cloudinary = require('cloudinary').v2;

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
connectionString: connectionString,
});

router.post('/', (req, res, next) => { 
    const values = [
    req.body.gif_id,
    req.body.gif_title,
    req.body.gif_author,
    req.body.date_created,
    req.body.category,
    req.body.gif_URL
    ];
    const text = 'INSERT INTO gifs(gif_id,gif_title,gif_author,date_created, category, gif_URL) VALUES($1,$2,$3,$4,$5, $6) RETURNING *';
    pool.query(text,values, (err,res) => {
        if(err){ 
            console.log(err.stack); 
        } else {
            console.log(res.rows[0]); 
        } 
    });
});

module.exports = router;
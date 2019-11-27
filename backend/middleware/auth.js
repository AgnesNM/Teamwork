const jwt = require('jsonwebtoken');

const { Pool } = require('pg');

const bodyParser = require('body-parser');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
  connectionString: connectionString,
});
  

module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const admin = decodedToken.email;
        if (req.body.email !== 'Terry@teamwork.com') {
          throw 'you are not allowed to access this protected route!';
        } else {
          next();
        }
      } catch {
        res.status(401).json({
          error: new Error('Invalid request!')
        });
      }
};


bcrypt.compare(req.body.password, hash).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { employeeId: id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              employeeId: id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
);
  
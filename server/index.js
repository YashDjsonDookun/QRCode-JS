require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const sql = require("msnodesqlv8");
const PORT = process.env.PORT | 5000;
const conn = process.env.CONNECTION_STRING;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('QR_GEN Api')
});

// Fetch all users
app.get('/users', (req, res)=>{
    const query = `SELECT * FROM TBL_USER_INFO;`;

    sql.query(conn, query, (err, users) => {
        res.send(users)
    });
});

// Create new user
app.post('/createUser', (req, res)=> {
   try {
       const query = `
            INSERT INTO TBL_USER_INFO(FIRST_NAME, LAST_NAME, QUOTE)
            VALUES('${req.body.firstName}', '${req.body.lastName}', '${req.body.quote}');
       `;

       sql.query(conn, query, (err) => {
           if (err != null)
           {
               throw new Error();
           }
           res.status(200).send('Entry successfully Created!');
       });
   }
   catch (error)
   {
       res.status(500).send('Oops, Something Happened! Please see below.\n' + error);
   }
});

app.listen(PORT, ()=> {
   console.warn(`Listening on http://localhost:${PORT}`) ;
});
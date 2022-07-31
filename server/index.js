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

app.listen(PORT, ()=> {
   console.warn(`Listening on http://localhost:${PORT}`) ;
});
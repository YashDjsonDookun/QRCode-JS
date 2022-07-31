require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const mysql = require('mysql');
const PORT = 5000 | process.env.PORT;
const app = express();

app.use(morgan);
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

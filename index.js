const bodyparser=require('body-parser')
const express = require('express');
const dbconnect = require('./db/db.js');
const app=express();
const port=3000||process.env.PORT
const dotenv = require('dotenv').config();

const morgan = require('morgan')
dbconnect()
const project=require('./routes/projectroutes.js');
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());


app.use('/api',project);



app.listen(port,()=>{console.log(`listening port ${port}`)});

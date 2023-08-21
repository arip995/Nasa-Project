const express = require('express');
const path  = require('path')
var cors = require('cors');

const planetsRouter= require('./routes/planets/planets.router');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')))
app.use('/planets',planetsRouter);
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})

module.exports = app;
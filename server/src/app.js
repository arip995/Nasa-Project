const express = require('express');
const path  = require('path')
const cors = require('cors');
const morgan = require('morgan')

const planetsRouter= require('./routes/planets/planets.router');
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')))
app.use('/planets',planetsRouter);
app.get('/call',(req,res)=>{
    res.status(200).json({name: "Panda"});
})
app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'))
});


module.exports = app;
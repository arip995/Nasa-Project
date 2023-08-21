const express = require('express');
var cors = require('cors');

const planetsRouter= require('./routes/planets/planets.router');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/planets',planetsRouter);

module.exports = app;
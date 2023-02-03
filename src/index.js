/* eslint-disable no-undef */
const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;
const router = require('./router/router');
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));

app.use('/v1',router);

app.use((req,res) =>  res.status(404).send('page don\'t found'));

app.listen(port, async () => console.log('server on'));
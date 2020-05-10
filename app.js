const express = require('express');
const routes = require('./routes/index');

// create express app
const app = express();

// put request on req.body
app.use(express.json());

// handle own routes
app.use('/api/v1', routes);

// TODO: error handling

module.exports = app;

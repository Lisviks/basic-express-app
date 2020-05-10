const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

// create express app
const app = express();

// put request on req.body
app.use(express.json());

// setup cors for react app
app.use(cors({ origin: 'http://localhost:3000' }));

// handle own routes
app.use('/api/v1', routes);

// TODO: error handling

module.exports = app;

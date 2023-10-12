const express = require('express');
const app = express();
const mainRouter = require('./routes');

app.use(express.json());
app.use('/', mainRouter);

module.exports = app;

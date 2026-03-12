const express = require('express');
const routes = require('./routers/index.js');

const app = express();
routes(app);

module.exports = app;

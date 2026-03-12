const express = require('express');
const pessoaRouter = require('./pessoaRouter.js');

module.exports = (app) => {
  app.use(express.json(), pessoaRouter);
};

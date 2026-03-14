const express = require('express');
const pessoaRouter = require('./pessoaRouter.js');
const categoriaRouter = require('./categoriaRouter.js');
const cursoRouter = require('./cursoRouter.js');

module.exports = (app) => {
  app.use(express.json(), pessoaRouter, categoriaRouter, cursoRouter);
};

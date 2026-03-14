const { Router } = require('express');
const CategoriaController = require('../controller/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.pegaUm(req, res));
router.post('/categorias', (req, res) => categoriaController.cria(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.atualiza(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.apaga(req, res));

module.exports = router;
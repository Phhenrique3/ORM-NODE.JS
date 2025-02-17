const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) =>  categoriaController.pegaTodos(req, res));

module.exports = router;

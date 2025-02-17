const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const cursoController = new CursoController;

const router = Router();

router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res));

module.exports = router;

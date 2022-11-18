var express = require('express');
var router = express.Router();
const articulosController = require('../controllers/articulosController');

router.get('/',articulosController.index); 
router.post('/agregar',articulosController.agregar);
router.post('/eliminar/:codigo',articulosController.eliminar);
router.post('/modificar/:codigo',articulosController.modificar);
router.post('/actualizar/:codigo',articulosController.actualizar);
router.get('/renovar',articulosController.renovar);
router.post('/consultar/:codigo',articulosController.consultar);
router.post('/filtrarCodigo/:codigo',articulosController.filtrar);
router.post('/filtrarDescripcion/:descripcion',articulosController.filtrar);
router.get('/salir',articulosController.salir);

module.exports = router;

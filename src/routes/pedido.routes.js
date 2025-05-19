const express = require('express');
const router = express.Router();
const { listarPedidos } = require('../controllers/pedido.controller');

router.get('/', listarPedidos);

module.exports = router;


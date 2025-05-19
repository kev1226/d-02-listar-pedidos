const Pedido = require('../models/pedido.model');

exports.listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar los pedidos' });
  }
};


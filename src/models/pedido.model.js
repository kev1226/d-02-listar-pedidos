const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  cliente: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pedido', PedidoSchema);

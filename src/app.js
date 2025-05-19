require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path'); // Necesario para servir HTML

const pedidoRoutes = require('./routes/pedido.routes');

app.use(express.json());
app.use('/api/pedidos', pedidoRoutes);


// Servir archivos estáticos (como HTML) desde la carpeta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error en conexión MongoDB:', err));

app.listen(process.env.PORT, () => {
  console.log(`Microservicio LISTAR PEDIDOS en puerto ${process.env.PORT}`);
});

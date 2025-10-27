const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gametracker')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log('Error conectando a MongoDB:', err));

    //prueba
app.get('/', (req, res) => {
  res.json({ message: 'Backend funcionando!' });
});

    //iniciar
app.listen(PORT, () => {
  console.log(` Servidor corriendo en ${PORT}`);
});
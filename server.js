const express = require('express');
const app = express();
const port = 4545;

app.get('/api/vehiculos', (req, res) => {
  const vehiculos = [
    { marca: 'Toyota', modelo: 'Camry' },
    { marca: 'Honda', modelo: 'Civic' }
  ];
  res.json(vehiculos);
});

app.get('/api/productos', (req, res) => {
  const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 30 }
  ];
  res.json(productos);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


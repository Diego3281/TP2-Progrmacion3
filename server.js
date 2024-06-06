const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/weather', { useNewUrlParser: true, useUnifiedTopology: true });

// Modelo de búsqueda
const searchSchema = new mongoose.Schema({
  location: String,
  date: { type: Date, default: Date.now }
});
const Search = mongoose.model('Search', searchSchema);

// Rutas
app.post('/api/history', async (req, res) => {
  const newSearch = new Search(req.body);
  try {
    await newSearch.save();
    res.status(201).send(newSearch);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto 5000 ${port}`);
});

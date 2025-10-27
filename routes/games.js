const express = require('express');
const router = express.Router();
const Game = require('../models/game.js');

// GET - Obtener todos los juegos
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Crear nuevo juego
router.post('/', async (req, res) => {
  const game = new Game({
    title: req.body.title,
    cover: req.body.cover,
    platform: req.body.platform,
    genre: req.body.genre,
    description: req.body.description
  });

  try {
    const newGame = await game.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET - Obtener un juego por ID
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Juego no encontrado' });
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT - Actualizar juego
router.put('/:id', async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Eliminar juego
router.delete('/:id', async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: 'Juego eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
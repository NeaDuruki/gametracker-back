const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  cover: {
    type: String,
    default: ''
  },
  platform: {
    type: String,
    default: 'PC'
  },
  completed: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0
  },
  hoursPlayed: {
    type: Number,
    default: 0
  },
  genre: {
    type: String,
    default: 'Acción'
  },
  description: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);
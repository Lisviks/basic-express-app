const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Please supply todo text.',
    trim: true,
  },
  complete: {
    type: Boolean,
    required: true,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todo', todoSchema);

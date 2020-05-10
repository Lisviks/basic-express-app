const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// all todos routes
router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.newTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;

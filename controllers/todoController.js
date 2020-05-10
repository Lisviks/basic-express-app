const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

exports.newTodo = async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.send('Deleted todo');
};

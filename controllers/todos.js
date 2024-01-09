const Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo
};

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}

function create(req, res) {
  console.log(req.body)
  // Models are responsible for CRUD'ing the date
  Todo.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect('/todos');
}

function newTodo(req, res) {
  res.render('todos/new', {title: 'New Todo'});
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    // Don't forget to add the comma above
    title: 'To-Do Details'
  });
}

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    title: 'All To-Dos'
  });
}
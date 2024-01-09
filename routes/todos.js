const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

// All paths start with '/todos'

// GET /todos (index action/functionality - list all todos)
router.get('/', todosCtrl.index);
// GET /todos/new <- Define BEFORE sjow route
router.get('/new', todosCtrl.new);
// GET /todos/ :id (show action/functionality - display a single todo)
router.get('/:id', todosCtrl.show);
// POST /todos
router.post('/', todosCtrl.create);
// DELETE /todos/:id
router.delete('/:id', todosCtrl.delete);


module.exports = router;

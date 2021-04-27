const express = require('express');

const app = express.Router();
const repository = require('../repositories/TodoRepository');

// get all todo items in the db
app.get('/', (req, res) => {
  repository.findAll().then((todos) => {
    res.json(todos);
  }).catch((error) => console.log(error));
});

app.get('/:search', (req, res) => {
    const { search } = req.params;
    console.log(search);
    repository.findByName(search).then((todos) => {
      res.json(todos);
    }).catch((error) => console.log(error));
  });

// get all todo items in the db
app.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    repository.findById(id).then((todos) => {
      res.json(todos);
    }).catch((error) => console.log(error));
  });

// add a todo item
app.post('/', (req, res) => {
  const { name } = req.body;
  repository.create(name).then((todo) => {
    res.json(todo);
  }).catch((error) => console.log(error));
});

// delete a todo item
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id).then((ok) => {
    console.log(ok);
    console.log(`Deleted record with id: ${id}`);
    res.status(200).json([]);
  }).catch((error) => console.log(error));
});

// update a todo item
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const todo = { name: req.body.name, done: req.body.done };
  repository.updateById(id, todo)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});
module.exports = app;
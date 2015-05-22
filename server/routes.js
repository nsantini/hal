var todos = require('./todos');

function respondWithTodos(res) {
  res.send(JSON.stringify(todos.getAllTodos()));
};

var routes = {
  registerRoutes: function(app) {
    app.get('/todos', function(req, res) {
      respondWithTodos(res);
    });

    app.get('/todos/:id', function(req, res) {
      res.send(JSON.stringify(todos.getTodo(req.params.id)));
    });

    app.post('/todos/add', function(req, res) {
      todos.addTodo(req.body);
      respondWithTodos(res);
    });

    app.post('/todos/toggleall', function(req, res) {
      todos.toggleAll();
      respondWithTodos(res);
    });

    app.post('/todos/deleteall', function(req, res) {
      todos.deleteAll();
      respondWithTodos(res);
    });

    app.post('/todos/toggle/:id', function(req, res) {
      todos.toggle(req.params.id);
      respondWithTodos(res);
    });

    app.post('/todos/delete/:id', function(req, res) {
      todos.delete(req.params.id);
      respondWithTodos(res);
    });
  }
};

module.exports = routes;

var todos = require('./todos');

var routes = {
  registerRoutes: function(app) {
    app.get('/todos', function(req, res) {
      res.send(JSON.stringify(todos.getAllTodos()));
    });

    app.get('/todos/:id', function(req, res) {
      todos.getTodo(req.params.id);
    });

    app.post('/todos', function(req, res) {
      todos.addTodo(req.body);
      res.send(JSON.stringify(todos.getAllTodos()));
    });

    app.post('/todos/toggleall', function(req, res) {
      todos.toggleAll();
    });

    app.post('/todos/deleteall', function(req, res) {
      todos.deleteAll();
    });

    app.post('/todos/toggle/:id', function(req, res) {
      todos.toggle(req.params.id);
    });

    app.post('/todos/delete/:id', function(req, res) {
      todos.toggle(req.params.id);
    });
  }
};

module.exports = routes;

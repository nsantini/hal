var todos = require('./todos');

var routes = {
  registerRoutes: function(app) {
    app.get('/todos', function(req, res) {
      res.send(JSON.stringify(todos.getAllTodos()));
    });

    app.post('/todos', function(req, res) {
      todos.addTodo(req.body);
      res.send(JSON.stringify(todos.getAllTodos()));
    })
  }
};

module.exports = routes;

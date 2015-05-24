todos = require('./todos')

respondWithTodos = (res) ->
  res.send(JSON.stringify(todos.getAllTodos()))

routes =
  registerRoutes: (app) ->
    app.get('/todos', (req, res) ->
      respondWithTodos(res)
    )

    app.get('/todos/:id', (req, res) ->
      res.send(JSON.stringify(todos.getTodo(req.params.id)))
    )

    app.post('/todos/add', (req, res) ->
      todos.addTodo(req.body)
      respondWithTodos(res)
    )

    app.post('/todos/toggleall', (req, res) ->
      todos.toggleAll()
      respondWithTodos(res)
    )

    app.post('/todos/deleteall', (req, res) ->
      todos.deleteAll()
      respondWithTodos(res)
    )

    app.post('/todos/toggle/:id', (req, res) ->
      todos.toggle(req.params.id)
      respondWithTodos(res)
    )

    app.post('/todos/delete/:id', (req, res) ->
      todos.delete(req.params.id)
      respondWithTodos(res)
    )

module.exports = routes;

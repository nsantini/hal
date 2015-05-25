todos = require('./todos')

respondWithTodos = (res) ->
  res.json(JSON.stringify(todos.getAllTodos()))

routes =
  registerRoutes: (app) ->
    app.get('/todos', (req, res) ->
      respondWithTodos(res)
    )

    app.get('/todos/:id', (req, res) ->
      res.json(JSON.stringify(todos.getTodo(req.params.id)))
    )

    app.post('/todos/add', (req, res) ->
      todos.addTodo(req.body)
      respondWithTodos(res)
    )

    app.post('/todos/toggleall', (req, res) ->
      todos.toggleAll()
      respondWithTodos(res)
    )

    app.delete('/todos/deleteall', (req, res) ->
      todos.deleteAll()
      respondWithTodos(res)
    )

    app.post('/todos/toggle/:id', (req, res) ->
      todos.toggle(req.params.id)
      respondWithTodos(res)
    )

    app.delete('/todos/delete/:id', (req, res) ->
      todos.delete(req.params.id)
      respondWithTodos(res)
    )

module.exports = routes;

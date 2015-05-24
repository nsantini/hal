halson = require('halson')
_ = require('underscore')

_todos = halson({})
  .addLink('self', '/todos')
  .addLink('create', '/todos/add')
  .addLink('toggle', '/todos/toggleall')
  .addLink('delete', '/todos/deleteall')

todos =
  getAllTodos: () ->
    return JSON.stringify(_todos)

  getTodo: (id) ->
    return _todos.getEmbed('todos', (todo) ->
      todo.id is id
    )

  addTodo: (data) ->
    id = _.uniqueId('todo_')
    todo = halson({
      id: id,
      text: data.text,
      completed: false
    })
      .addLink('self', '/todos/' + id)
      .addLink('toggle', '/todos/toggle/' + id)
      .addLink('delete', '/todos/delete/' + id)

    _todos.addEmbed('todos', todo)

  toggle: (id) ->
    todo = this.getTodo(id)
    todo.completed = !todo.completed

  toggleAll: () ->
    _.each(_todos.getEmbeds('todos'), (todo) ->
      todo.completed = !todo.completed
    )

  delete: (id) ->
    _todos.removeEmbeds('todos', (todo) ->
      return todo.id is id
    )

  deleteAll: () ->
    _todos.removeEmbeds('todos')

module.exports = todos

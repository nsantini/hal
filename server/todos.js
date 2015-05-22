var halson = require('halson');
var _ = require('underscore');

var _todos = halson({})
  .addLink('self', '/todos')
  .addLink('create', '/todos/add')
  .addLink('toggle', '/todos/toggleall')
  .addLink('delete', '/todos/deleteall');

var todos = {
  getAllTodos: function() {
    return JSON.stringify(_todos);
  },

  getTodo: function(id) {
    return _todos.getEmbed('todos', function(todo) {
      return todo.id === id;
    });
  },

  addTodo: function(data) {
    var id = _.uniqueId('todo_');
    var todo = halson({
      id: id,
      text: data.text,
      completed: false
    })
      .addLink('self', '/todos/' + id)
      .addLink('toggle', '/todos/toggle/' + id)
      .addLink('delete', '/todos/delete/' + id);

    _todos.addEmbed('todos', todo);
  },

  toggle: function(id) {
    var todo = this.getTodo(id);
    todo.completed = !todo.completed;
  },

  toggleAll: function() {
    _.each(_todos.getEmbeds('todos'), function(todo) {
      todo.completed = !todo.completed;
    });
  },

  delete: function(id) {
    _todos.removeEmbeds('todos', function(todo) {
      return todo.id === id;
    });
  },

  deleteAll: function() {
    _todos.removeEmbeds('todos');
  }
};

module.exports = todos;

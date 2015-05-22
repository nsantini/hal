var halson = require('halson');
var _ = require('underscore');

var _todos = halson({})
  .addLink('self', '/todos')
  .addLink('toggle', '/todos/toggleall')
  .addLink('delete', '/todos/deleteall');

var todos = {
  getAllTodos: function() {
    return JSON.stringify(_todos);
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

  },

  delete: function(id) {

  },

  toggleAll: function() {

  },

  deleteAll: function() {
    
  }
};

module.exports = todos;

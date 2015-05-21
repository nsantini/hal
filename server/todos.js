var halson = require('halson');

var _todos = [{text: 'test', completed: false}];

var todos = {
  getAllTodos: function() {
    return _todos;
  },

  addTodo: function(data) {
    _todos.push(data);
  }
};

module.exports = todos;

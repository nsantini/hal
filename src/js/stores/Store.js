var $ = require('jquery');
var _ = require('underscore');
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var halson = require('halson');

// Internal storage of TODOs
var _todos = null;

var Store = assign({}, EventEmitter.prototype, {

  getAllTodos: function() {
    return _todos;
  },

  emitChange: function() {
    this.emit('changed');
  },

  addListener: function(callback) {
    this.on('changed', callback);
  },

  removeListener: function(callback) {
    this.removeListener('changed', callback);
  }
});

function loadTodos(data) {
  _todos = halson(JSON.parse(data));
  Store.emitChange();
}

Dispatcher.register(function(action) {
  switch (action.action) {
    case 'LOAD':
      $.ajax({
          url: "/todos",
          success: loadTodos
      });
      break;
    case 'CREATE':
      $.ajax({
          url: _todos.getLink('create').href,
          method: 'POST',
          data: { text: action.text },
          success: loadTodos
      });
      break;
    case 'TOGGLE':
      var todo = _.filter(_todos.getEmbeds('todos'), function(t) {
        return t.id === action.id;
      })[0];
      $.ajax({
          url: todo.getLink('toggle').href,
          method: 'POST',
          success: loadTodos
      });
      break;
    case 'TOGGLEALL':
      $.ajax({
          url: _todos.getLink('toggle').href,
          method: 'POST',
          success: loadTodos
      });
      break;
  }
});

module.exports = Store;

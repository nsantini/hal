var $ = require('jquery');
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var todos = {_embedded: { todos: [] }};

var Store = assign({}, EventEmitter.prototype, {

  getAllTodos: function() {
    return todos;
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
  todos = JSON.parse(JSON.parse(data));
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
          url: "/todos",
          method: 'POST',
          data: { text: action.text },
          success: loadTodos
      });
      break;
  }
});

module.exports = Store;

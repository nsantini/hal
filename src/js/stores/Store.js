var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var todos = [];

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

Dispatcher.register(function(action) {
  switch (action.action) {
    case 'CREATE':
      todos.push({
        complete: false,
        text: action.text
      });
      Store.emitChange();
      break;
    case 'LOADED':
      todos = action.todos;
      Store.emitChange();
      break;

  }
});

module.exports = Store;

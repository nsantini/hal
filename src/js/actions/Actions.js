var Dispatcher = require('../dispatcher/Dispatcher');

var Actions = {
  loadTodos: function() {
    Dispatcher.dispatch({
      action: 'LOAD'
    });
  },

  create: function(text) {
    Dispatcher.dispatch({
      action: 'CREATE',
      text: text
    });
  },

  toggle: function(id) {
    Dispatcher.dispatch({
      action: 'TOGGLE',
      id: id
    });
  },

  toggleAll: function() {
    Dispatcher.dispatch({
      action: 'TOGGLEALL'
    });
  },

  delete: function(id) {
    Dispatcher.dispatch({
      action: 'DELETE',
      id: id
    });
  },

  deleteAll: function() {
    Dispatcher.dispatch({
      action: 'DELETEALL'
    });
  }
};

module.exports = Actions;

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
  }
};

module.exports = Actions;

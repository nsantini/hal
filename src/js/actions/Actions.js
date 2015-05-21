var $ = require('jquery');
var Dispatcher = require('../dispatcher/Dispatcher');

function dispatchLoadedTodos(data, textStatus, jqXHR) {
  Dispatcher.dispatch({
    action: 'LOADED',
    todos: JSON.parse(data)
  });
}

var Actions = {
  loadTodos: function() {
    $.ajax({
        url: "/todos",
        success: dispatchLoadedTodos
    });
  },

  create: function(text) {
    Dispatcher.dispatch({
      action: 'CREATE',
      text: text
    });
    $.ajax({
        url: "/todos",
        method: 'POST',
        data: { text: text },
        success: dispatchLoadedTodos
    });
  }
};

module.exports = Actions;

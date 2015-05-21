var Dispatcher = require('../dispatcher/Dispatcher');

var Actions = {
  create: function(text) {
    Dispatcher.dispatch({
      action: 'CREATE',
      text: text
    })
  }
};

module.exports = Actions;

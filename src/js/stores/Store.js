var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var halson = require('halson');
var Dispatcher = require('../dispatcher/Dispatcher');

// Internal storage of TODOs
var _todos = null;

function loadTodos(data) {
  _todos = halson(JSON.parse(data));
  Store.emitChange();
};

function getTodo(id) {
  return _todos.getEmbed('todos', function(todo) {
    return todo.id === id;
  });
};

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
  },

  loadTodos: function() {
    $.ajax({
      url: "/todos",
      success: loadTodos
    });
  },

  create: function(text) {
    $.ajax({
      url: _todos.getLink('create').href,
      method: 'POST',
      data: { text: text },
      success: loadTodos
    });
  },

  toggle: function(id) {
    var todo = getTodo(id);
    $.ajax({
      url: todo.getLink('toggle').href,
      method: 'POST',
      success: loadTodos
    });
  },

  toggleAll: function() {
    $.ajax({
      url: _todos.getLink('toggle').href,
      method: 'POST',
      success: loadTodos
    });
  },

  delete: function(id) {
    var todo = getTodo(id);
    $.ajax({
      url: todo.getLink('delete').href,
      method: 'POST',
      success: loadTodos
    });
  },

  deleteAll: function() {
    $.ajax({
      url: _todos.getLink('delete').href,
      method: 'POST',
      success: loadTodos
    });
  }
});

Dispatcher.register(function(action) {
  switch (action.action) {
    case 'LOAD':
      Store.loadTodos();
      break;

    case 'CREATE':
      Store.create(action.text);
      break;

    case 'TOGGLE':
      Store.toggle(action.id);
      break;

    case 'TOGGLEALL':
      Store.toggleAll();
      break;

    case 'DELETE':
      Store.delete(action.id);
      break;

    case 'DELETEALL':
      Store.deleteAll();
      break;
  }
});

module.exports = Store;

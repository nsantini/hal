var React = require('react');
var Header = require('./Header.react');
var Todos = require('./Todos.react');
var Store = require('../stores/Store');

function getAllTodos() {
  return {
    todos: Store.getAllTodos()
  };
};

var TodoApp = React.createClass({

  getInitialState: function() {
    return getAllTodos();
  },

  componentDidMount: function() {
    Store.addListener(this.storeChanged);
  },

  componentWillUnmount: function() {
    Store.removeListener(this.storeChanged);
  },

  render: function() {
    return (
      <div>
        <Header />
        <Todos data={this.state.todos} />
      </div>
    );
  },

  storeChanged: function() {
    this.setState(getAllTodos());
  }
});

module.exports = TodoApp;

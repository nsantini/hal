var React = require('react');
var Header = require('./Header.react');
var Todos = require('./Todos.react');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

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
    Actions.loadTodos();
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

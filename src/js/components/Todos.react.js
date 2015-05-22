var React = require('react');
var _ = require("underscore");
var Actions = require('../actions/Actions');

var Todos = React.createClass({

  render: function() {
    var data = this.props.data;
    var todos = data ? data.getEmbeds('todos') : null;
    var output = <li className="list-group-item">--no todos yet--</li>;

    if (todos && !_.isArray(todos)) {
      todos = [todos];
    }

    if (_.isArray(todos) && !_.isEmpty(todos)) {
      output = _.map(todos, (function(todo) {
        return (
          <li data-id={todo.id} className="list-group-item">
            {todo.text}&nbsp;
            <a href="#" onClick={this.toggle}>
              <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            </a>
          </li>);
      }).bind(this))
    }

    return (
      <div className="row">
        <ul className="list-group">
          {output}
        </ul>
      </div>
    );
  },

  toggle: function(event) {
    Actions.toggle(event.target.parentNode.parentNode.attributes['data-id'].value);
  }
});

module.exports = Todos;

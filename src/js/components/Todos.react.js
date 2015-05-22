var React = require('react');
var _ = require("underscore");

var Todos = React.createClass({

  render: function() {
    var todos = this.props.data._embedded ? this.props.data._embedded.todos : null;
    var output = null;
    if (_.isArray(todos)) {
      output = _.map(todos, function(todo) {
        return (<li className="list-group-item">{todo.text}</li>);
      })
    } else if (_.isObject(todos)) {
      output = <li className="list-group-item">{todos.text}</li>;
    } else {
      output = <li className="list-group-item">--no todos yet--</li>;
    }
    return (
      <div className="row">
        <ul className="list-group">
          {output}
        </ul>
      </div>
    );
  }
});

module.exports = Todos;

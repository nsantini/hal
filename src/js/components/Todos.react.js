var React = require('react');
var _ = require("underscore");

var Todos = React.createClass({

  render: function() {
    var todos = _.map(this.props.data, function(todo) {
      return (<li className="list-group-item">{todo.text}</li>);
    });

    return (
      <div className="row">
        <ul className="list-group">
          {todos}
        </ul>
      </div>
    );
  }
});

module.exports = Todos;

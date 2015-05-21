var React = require('react');
var _ = require("underscore");

var Todos = React.createClass({

  render: function() {

    return (
      <div className="row">
        <ul className="list-group">
          {
            _.map(this.props.data, function(todo) {
              return (<li className="list-group-item">{todo.text}</li>);
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Todos;

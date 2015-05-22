var _ = require("underscore");
var React = require('react');
var Item = require('./Item.react');
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
      output = _.map(todos, function(todo) {
        return <Item data={todo} />;
      });
    }

    return (
      <div>
        <div className="row">
          <a href="#" onClick={this.toggle}>
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          </a>
          <span>&nbsp;(toggle all)</span>
        </div>
        <div className="row">
          <ul className="list-group">
            {output}
          </ul>
        </div>
      </div>
    );
  },

  toggle: function(event) {
    event.preventDefault();
    Actions.toggleAll();
  }
});

module.exports = Todos;

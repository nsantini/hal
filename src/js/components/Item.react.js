var React = require('react');
var Actions = require('../actions/Actions');

var Item = React.createClass({
  render: function() {
    var todo = this.props.data;
    var text = todo.completed ?
      <s>{todo.text}</s> :
      todo.text;
    return (
      <li data-id={todo.id} className="list-group-item">
        <span>{text}</span>
        <span>&nbsp;</span>
        <a href="#" onClick={this.toggle}>
          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
        </a>
        <span>&nbsp;</span>
        <a href="#" onClick={this.delete}>
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
    );
  },

  toggle: function(event) {
    event.preventDefault();
    Actions.toggle(event.target.parentNode.parentNode.attributes['data-id'].value);
  },

  delete: function(event) {
    event.preventDefault();
    Actions.delete(event.target.parentNode.parentNode.attributes['data-id'].value);
  }
});

module.exports = Item;

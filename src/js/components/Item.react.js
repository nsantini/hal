var React = require('react');
var Actions = require('../actions/Actions');

var Item = React.createClass({
  render: function() {
    var todo = this.props.data;
    var text = todo.completed ?
      "<s>" + todo.text + "</s>" :
      todo.text;
    return (
      <li data-id={todo.id} className="list-group-item">
        <span
          dangerouslySetInnerHTML={{
            __html: text
          }}></span>
        <a href="#" onClick={this.toggle}>&nbsp;
          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
        </a>
      </li>
    );
  },

  toggle: function(event) {
    event.preventDefault();
    Actions.toggle(event.target.parentNode.parentNode.attributes['data-id'].value);
  }
});

module.exports = Item;

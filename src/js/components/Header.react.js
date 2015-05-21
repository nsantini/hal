var React = require('react');
var TextInput = require('./TextInput.react');
var Actions = require('../actions/Actions');

var Header = React.createClass({

  render: function() {
    return (
      <header id="header">
        <div className="jumbotron">
          <h1>Open the door Hal!</h1>
          <p className="lead">And lets create a TODO list</p>
          <TextInput
            id="new-todo"
            placeholder="What do you want me to do Hal?"
            onSave={this._onSave}
          />
        </div>
      </header>
    );
  },

  _onSave: function(text) {

    if (text.trim()) {
      Actions.create(text);
    }
  }
});

module.exports = Header;

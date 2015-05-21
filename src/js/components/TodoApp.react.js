var React = require('react');

var TodoApp = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Open the door Hal!</h1>
        <p className="lead">And lets create a TODO list</p>
      </div>
    );
  }
});

module.exports = TodoApp;

var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text} = this.props;  //grab id using es6 destructuring
    return (
      <div>
        {id}.{text}
      </div>
    )
  }
});

module.exports = Todo;

var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();  //pevent page from reloading so we can handle w/ react
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value='';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container_footer">
        <form onSubmit={this.handleSubmit} className="add-todo">
          <input type="text" ref="todoText" placeholder="Enter Todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;

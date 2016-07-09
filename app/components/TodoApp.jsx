var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        }, {
          id: 2,
          text: 'clean the yard'
        }, {
          id: 3,
          text: 'make food'
        }, {
          id: 4,
          text: 'play video games'
        }
      ]
    };
  },
  handleAddTodo: function(text) {  //we wanna pass this down as the prop
    alert('new todo:' + text);
  },
  render: function() {
    var {todos} = this.state; //pull off state using es6 destructuring
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;

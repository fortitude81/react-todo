var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');  //es6 destructuring syntax; same as var Route = require('react-router').Route etc....


//load foundation
$(document).foundation();  //fire up foundation

//App css
require('style!css!sass!applicationStyles')

//react-router
ReactDOM.render(                    //most common react DOM method to render to screen
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);

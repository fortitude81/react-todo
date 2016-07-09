//load dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//load in TodoApp component
var TodoApp = require('TodoApp');

//write Test
describe('TodoApp', () => {
  it('should exist', () => {  //every test starts with 'it'
    expect(TodoApp).toExist();
  });
});

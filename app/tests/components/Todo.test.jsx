//load dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//load in Todo component
var Todo = require('Todo');

//write Test
describe('Todo', () => {
  it('should exist', () => {  //every test starts with 'it'
    expect(Todo).toExist();
  });
});

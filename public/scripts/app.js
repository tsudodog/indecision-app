'use strict';

console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension
var template = React.createElement(
  'h1',
  null,
  'This is JSX2 from app.js'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

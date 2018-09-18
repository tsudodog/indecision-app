console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension
//var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js!"
  );
  var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
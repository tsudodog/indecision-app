console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension

var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js!"
  );
  var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
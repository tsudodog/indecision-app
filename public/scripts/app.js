"use strict";

console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension
var appObject = {
    title: "hello",
    subTitle: "World"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appObject.title
    ),
    React.createElement(
        "p",
        null,
        appObject.subTitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

//Create a templateTwo Variable
var user = {
    userName: 'TsudoDog',
    userAge: 27,
    userLocation: 'Saint Paul'
};
var userName = 'TsudoDog';
var userAge = 27;
var userLocation = 'Saint Paul';
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.userName.toUpperCase()
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        userAge
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        userLocation
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

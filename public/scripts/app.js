"use strict";

console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension
var appObject = {
    title: "This is the title field",
    subTitle: "World",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    appObject && React.createElement(
        "h1",
        null,
        appObject.title
    ),
    appObject.subTitle && React.createElement(
        "p",
        null,
        appObject.subTitle
    ),
    React.createElement(
        "p",
        null,
        " ",
        appObject.options.length > 0 ? 'Here are your options.' : 'No options'
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
    name: 'TsudoDog',
    age: 27,
    location: 'Saint Paul'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "location: ",
            location
        );
    } else {
        return React.createElement(
            "p",
            null,
            "location: N/A"
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name.toUpperCase() : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

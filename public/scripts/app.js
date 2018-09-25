"use strict";

console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension
var appObject = {
    title: "This is the title field",
    subTitle: "World",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    // stop full page refresh
    e.preventDefault();
    console.log('Form Submitted');
    var option = e.target.elements.option.value;
    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
    }
    rerenderApp();
};

var removeAll = function removeAll() {

    appObject.options = [];
    rerenderApp();
};

var onMakeDescision = function onMakeDescision() {
    var randomNum = Math.floor(Math.random() * appObject.options.length);
    var option = appObject.options[randomNum];
    alert(option);
};

var numbers = [55, 101, 1000];

var appRoot = document.getElementById('app');

var rerenderApp = function rerenderApp() {
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
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "button",
            { disabled: appObject.options.length === 0, onClick: onMakeDescision },
            "Make Decision"
        ),
        React.createElement(
            "p",
            null,
            appObject.options.length
        ),
        numbers.map(function (number) {
            return React.createElement(
                "p",
                { key: number },
                "Number: ",
                number
            );
        }),
        React.createElement(
            "ol",
            null,
            appObject.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

rerenderApp();

console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension
var appObject = {
    title: "hello",
    subTitle: "World"
}

var template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subTitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

//Create a templateTwo Variable
var user = {
    userName : 'TsudoDog',
    userAge : 27,
    userLocation : 'Saint Paul'
}
var userName = 'TsudoDog';
var userAge = 27;
var userLocation = 'Saint Paul';
var templateTwo = (
    <div>
        <h1>{user.userName.toUpperCase()}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>

    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
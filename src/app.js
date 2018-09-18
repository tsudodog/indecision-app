console.log('App.js is running!');

//JSX Java Script XML, it is a javascript extension
var appObject = {
    title: "This is the title field",
    subTitle: "World",
    options : ['One', 'Two']
}

var template = (
    <div>
        {appObject && <h1>{appObject.title}</h1> }
        {appObject.subTitle && <p>{appObject.subTitle}</p>}
        <p> {appObject.options.length > 0? 'Here are your options.': 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

//Create a templateTwo Variable
var user = {
    name : 'TsudoDog',
    age : 27,
    location : 'Saint Paul'
};

function getLocation(location){
    if(location){
        return <p>location: {location}</p>;
    }else{
        return <p>location: N/A</p>;
    }
}



var templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : "Anonymous"}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}


    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
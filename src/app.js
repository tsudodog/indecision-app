class IndecisionApp extends React.Component {
    render(){
        return(
                <div>
                    <Header/>
                    <Action/>
                    <Options/>
                    <AddOption/>
                </div>
        )
    }
}

class Header extends React.Component { 
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer!</h2>
            </div>   
        )
    }
}


class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                <h1>Options</h1>
                <Option></Option>
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <h1>add options</h1>
               
            </div>
        )
    }
}


class Option extends React.Component{
    render(){
        return (
            <div>
                <label>Option Component</label>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));
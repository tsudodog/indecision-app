class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subTitle = 'Put Your life in the hands of a computer';
        const options = ['thing one', 'thing two', 'thing three'];
        return(
                <div>
                    <Header title={title} subTitle={subTitle}/>
                    <Action/>
                    <Options options={options}/>
                    <AddOption/>
                </div>
        )
    }
}

class Header extends React.Component { 
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
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
                {this.props.options.length}
                {this.props.options.map( s => <Option key={s} optionText={s}/>)}
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
            <h1>Option</h1>
                <label>{this.props.optionText}</label>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));
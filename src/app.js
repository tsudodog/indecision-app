class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options : ['thing one', 'thing two', 'thing twwooooo']

        };
    }
//handle delete options
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[]
            }
        });
    };

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);

    }
    render(){
        const title = 'Indecision';
        const subTitle = 'Put Your life in the hands of a computer';
        return(
                <div>
                    <Header title={title} subTitle={subTitle}/>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions = {this.handleDeleteOptions}
                    />
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
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}             
                    >What should I do?</button>
            </div>
        )
    }
}




class Options extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Options</h1>
                <button onClick={this.props.handleDeleteOptions}> Remove All</button>
                {this.props.options.map( s => <Option key={s} optionText={s}/>)}
            </div>
        )
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        // stop full page refresh
        e.preventDefault();
        console.log('Form Submitted');
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
            // appObject.options.push(option);
            // e.target.elements.option.value = '';
        }
        //rerenderApp();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button  >Add Option</button>
               </form>
            </div>
        )
    }
}


class Option extends React.Component{
    render(){
        
        return (
            <div>
                <label>{this.props.optionText}</label>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));
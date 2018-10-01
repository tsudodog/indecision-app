class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []

        };
    }

    handleAddOption(option){
        if(!option){
            return 'Enter Valid Value to Add Item';
        }else if(this.state.options.indexOf(option) > -1 ){
            return 'This option already exists!'
        }
        this.setState((prevState) => {
            return {
                options : prevState.options.concat(option)
            }
        });
    }
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
        const subTitle = 'Put Your life in the hands of a computer';
        return(
                <div>
                    <Header 
                    subTitle={subTitle}/>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions = {this.handleDeleteOptions}
                    />
                    <AddOption
                        handleAddOption = {this.handleAddOption}
                    />
                    <div>
                     <User
                        name="Alex"
                        age="27"
                     />
                    </div>
                </div>
              
        )
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>   
    )
}

Header.defaultProps = {
    title : 'Indecision',
}



const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}             
                >What should I do?</button>
        </div>
    )
}


const Options = (props) => {
    return (
        <div>
            <h1>Options</h1>
            <button onClick={props.handleDeleteOptions}> Remove All</button>
            {props.options.map( s => <Option key={s} optionText={s}/>)}
        </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleAddOption(e){
        // stop full page refresh
        e.preventDefault();
        console.log('Form Submitted');
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // some cool es6 short hand notation
        this.setState(() => {
            return { error }
        });


        //rerenderApp();
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button  >Add Option</button>
               </form>
            </div>
        )
    }
}


const User = (props) => {
    return(
        <div>
            <p>User: {props.name} </p>
            <p>Age: {props.age}</p>
        </div>
    )
}




const Option = (props) => {
    return (
        <div>
            <label>{props.optionText}</label>
        </div>
    )
}


ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));
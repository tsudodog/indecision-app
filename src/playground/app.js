class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options

        };
    }

    componentDidMount(){



        try{
            console.log('component did mount');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){         
                this.setState( () => ({options: options}));
            }
        }catch (e){
            // Do nothign at all we will fall back to empty array as default value.
        }


    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length != this.state.options.length){
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid Value to Add Item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));

    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption(option) {
        this.setState((prevState) => ({ options: prevState.options.filter((o) => { return o != option }) }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);

    }
    render() {
        const subTitle = 'Put Your life in the hands of a computer';
        return (
            <div>
                <Header
                    subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
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

IndecisionApp.defaultProps = {
    options: []
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
    title: 'Indecision',
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
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map(s => (
                <Option
                    key={s}
                    optionText={s}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )
            )}
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        // stop full page refresh
        e.preventDefault();
        console.log('Form Submitted');
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // some cool es6 short hand notation
        this.setState(() => ({ error }));
        if(!error){
            e.target.elements.option.value = '';
        }

        //rerenderApp();
    }
    render() {
        return (
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
    return (
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
            <button onClick={
                (e) => {
                    props.handleDeleteOption(props.optionText)
                }
            }>Remove Option</button>
        </div>
    )
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
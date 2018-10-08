import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

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

            </div>

        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}




export default IndecisionApp;
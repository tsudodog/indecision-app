import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption : undefined
    };


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
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid Value to Add Item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));

    }
    handleDeleteOptions= () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({ options: prevState.options.filter((o) => { return o != option }) }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=> ({ selectedOption : option}));

    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption : undefined}));
    }
    render() {
        const subTitle = 'Put Your life in the hands of a computer';
        return (
            <div>
                <Header
                    subTitle={subTitle} />


                <div className="container">
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

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />

            </div>

        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}




export default IndecisionApp;
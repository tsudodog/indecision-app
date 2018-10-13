import React from 'react';

export default class AddOption extends React.Component {
   
    state = {
        error: undefined
    };
    
    handleAddOption = (e) => {
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button" >Add Option</button>
                </form>
            </div>
        )
    }
}

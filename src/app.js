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
                    <RemoveAllButton/>
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
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}


class RemoveAllButton extends React.Component{
    handleRemoveAll(){
        alert('removeAll');
    }

    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll}> Remove All</button>
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
import React from 'react'

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

export default Option;

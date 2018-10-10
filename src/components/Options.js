import React from 'react'
import Option from './Option'

const Options = (props) => (
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


export default Options;
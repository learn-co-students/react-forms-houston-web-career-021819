// Code ControlledInput Component Here

import React from 'react';

class ControlledInput extends React.Component {
    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
        })
    }

    render () {
        return(
            <form onSubmit = {event => this.handleChange(event)}>
                <input type= "text" value={this.state.value} omChange ={event => this.handleChange(event)}>

                </input>
            </form>
        )
    }
}

export default ControlledInput
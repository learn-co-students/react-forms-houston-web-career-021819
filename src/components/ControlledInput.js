// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component {
    state = {
        // firstName: "John",
        // lastName: "Henry"
        value: ''
    }
    // handleFirstNameChange = (event)=> {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleLastNameChange = (event)=> {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = event => {
      event.preventDefault()
      this.sendFormDataSomewhere(this.state)
    }

    render(){
        return(

            <form onSubmit = {event=> this.handleChange(event)}>
                Form Input: <input type = "text" onChange= {this.handleChange} value = {this.state.value}></input>
            </form>


        )
    }
}
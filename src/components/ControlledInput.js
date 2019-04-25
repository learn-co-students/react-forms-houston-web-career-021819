// Code ControlledInput Component Here
class Form extends Component {
    state = {
      firstName: "John",
      lastName: "Henry"
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)//send the data as a whole with state, because it is controlled
      }
      
   
    render() {
      return (
        <form onSubmit={ event => this.handleSubmit(event) }>
          <input onChange={event => this.handleChange(event)} type="text" name="firstName" value={this.state.firstName} />
          <input onChange={event => this.handleChange(event)} type="text" name="lastName" value={this.state.lastName} />
        </form>
      )
    }
  }
  
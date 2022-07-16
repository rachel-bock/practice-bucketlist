import React, { Component } from "react";
import './InputForm.css';

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      goal: '', 
      description: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitListItem = event => {
    event.preventDefault();
    const newListItem = {
      id: Date.now(),
      ...this.state
    }
    this.props.addListItems(newListItem);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({goal: '', description: ''});
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          placeholder="Goal"
          name='goal'
          value={this.state.goal}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type="text"
          placeholder="Description"
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}



export default InputForm;
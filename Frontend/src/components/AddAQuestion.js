import { connect } from 'react-redux';
import React, { Component } from 'react';

class AddAQuestion extends Component {
  constructor(props) {
      super(props);
      this.state = {
        question: '',
        answer: '',
      };
      this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleFormSubmit (event) {
      event.preventDefault();
      const newQuestion = {
        question: event.target.question.value,
        answer: event.target.answer.value,
      };
      this.props.addQuestion(newQuestion)
      this.reset()
    };

    reset () {
      this.setState({
        question: '',
        answer: '',
      })
    }

    handleInputChange (event) {
      const field = event.target.id;
      const value = event.target.value;
      this.setState({ [field]: value });
    }

    render () {
      return(
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <label htmlFor='question'>Question:</label>
          <input
            type='text'
            name='question'
            id='question'
            value={this.state.question}
            onChange={this.handleInputChange}
          />
          <label htmlFor='answer'>Answer:</label>
          <input
            type='text'
            name='answer'
            id='answer'
            value={this.state.answer}
            onChange={this.handleInputChange}
          />
          <input type='submit' value='Add' />
        </form>
      )
    }
  }

  export default AddAQuestion

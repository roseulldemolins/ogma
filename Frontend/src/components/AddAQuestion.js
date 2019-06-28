import React, { Component } from 'react';
import './AddAQuestion.css'

class AddAQuestion extends Component {
  constructor(props) {
      super(props);
      this.state = {
        subtopic: '',
        question: '',
        answer: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFormSubmit (event) {
      event.preventDefault();
      const newQuestion = {
        sub_topic: this.state.subtopic,
        question_text: this.state.question,
        answer_text: this.state.answer,
        type: "q_and_a",
        topic: "coding" // TODO: hard-coded topic needs updated when multi-topics are introduced
      };
      this.props.addQuestion(newQuestion);
      this.reset();
    };

    reset () {
      this.setState({
        subtopic: '',
        question: '',
        answer: ''
      })
    }

    handleInputChange (event) {
      const field = event.target.id;
      const value = event.target.value;
      this.setState({ [field]: value });
    }

    render () {
      return(
        <form className = "ui form" id="form" onSubmit={this.handleFormSubmit.bind(this)}>
          <div className = "fields">
            <div className = "inline field">
              <label htmlFor='subtopic'>Subtopic:</label>
              <input
                type='text'
                name='subtopic'
                id='subtopic'
                value={this.state.subtopic}
                onChange={this.handleInputChange}
              />
            </div>
            <div className = "inline field">
              <label htmlFor='question'>Question:</label>
              <input
                type='text'
                name='question'
                id='question'
                value={this.state.question}
                onChange={this.handleInputChange}
              />
            </div>
            <div className = "inline field">
              <label htmlFor='answer'>Answer:</label>
              <input
                type='text'
                name='answer'
                id='answer'
                value={this.state.answer}
                onChange={this.handleInputChange}
              />
            </div>
            <input className = "add-question-button" aria-label="add-button" type='submit' value='Add' />
            </div>
        </form>
      )
    }
  }

  export default AddAQuestion;

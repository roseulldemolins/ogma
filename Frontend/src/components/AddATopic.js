import { connect } from 'react-redux';
import React, { Component } from 'react';

class AddATopic extends Component {
  constructor(props) {
      super(props);
      this.state = {
        topic: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleFormSubmit (event) {
      event.preventDefault();
      const newTopic = {
        topic: event.target.topic.value
      };
      this.props.addTopic(newTopic)
      this.reset()
    };

    reset () {
      this.setState({
        topic: ''
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
          <label htmlFor='topic'>Question:</label>
          <input
            type='text'
            name='topic'
            id='topic'
            value={this.state.topic}
            onChange={this.handleInputChange}
          />
          <input type='submit' value='Add' />
        </form>
      )
    }
  }

  export default AddATopic

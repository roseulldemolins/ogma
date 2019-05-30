import React from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './FlashCard.css'

class FlashCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    if (!this.props.questions.length) {
        return (
          <div>Loading</div>
        )
      }
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div id='front' key="front">
          {this.props.questions[0].question_text}
          <button onClick={this.handleClick}>Click to flip</button>
        </div>

        <div id='back' key="back">
          {this.props.questions[0].answer_text}
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
  }
}

export default FlashCard

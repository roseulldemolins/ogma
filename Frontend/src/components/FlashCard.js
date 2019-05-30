import React from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './FlashCard.css'

class FlashCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      randomIndex: 0,
      changeCard: false
    };
    this.handleFlipClick = this.handleFlipClick.bind(this);
    this.handleNewCardClick = this.handleNewCardClick.bind(this);

  }

  handleNewCardClick(event) {
    event.preventDefault();
    this.pickCard();

  }

  pickCard(){
    this.setState({ changeCard: true });
    const random = Math.floor(Math.random()*Math.floor(this.props.questions.length))
    this.setState({ randomIndex: random })
  }

  handleFlipClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    if (!this.props.questions.length) {
        return (
          <div>Loading</div>
        )
      }
    if (this.state.changeCard == false) {
      this.pickCard()
    }
    return (
      <div>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div id='front' key="front">
          {this.props.questions[this.state.randomIndex].question_text}
          <button onClick={this.handleFlipClick}>Click to flip</button>
        </div>

        <div id='back' key="back">
          {this.props.questions[this.state.randomIndex].answer_text}
          <button onClick={this.handleFlipClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
      <button onClick={this.handleNewCardClick}>New card</button>
      </div>
    )
  }
}

export default FlashCard

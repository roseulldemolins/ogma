import React from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './FlashCard.css'

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      randomIndex: null
    };
    this.handleFlipClick = this.handleFlipClick.bind(this);
    this.handleNewCardClick = this.handleNewCardClick.bind(this);

  }

  handleNewCardClick(event) {
    event.preventDefault();
    this.setState({ randomIndex: Math.floor(Math.random()*Math.floor(this.props.questions.length))})
  }

  handleFlipClick(event) {
    if (this.state.randomIndex === null) {
      this.setState({randomIndex: event.target.id}, () => {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      })
    } else {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  }

  render() {
    if (!this.props.questions.length) {
        return (
          <div>Loading</div>
        )
      }
    const index = this.state.randomIndex || Math.floor(Math.random()*Math.floor(this.props.questions.length))
      return (
        <div className="flipcard">
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div id='front' key="front">
            <p>{this.props.questions[index].question_text}</p>
            <button id={index} onClick={this.handleFlipClick}>Click to flip</button>
          </div>

          <div id='back' key="back">
            <p>{this.props.questions[index].answer_text}</p>
            <button id={index} onClick={this.handleFlipClick}>Click to flip</button>
          </div>
        </ReactCardFlip>
        <button onClick={this.handleNewCardClick}>New card</button>
        </div>
      )
  }
}

export default FlashCard

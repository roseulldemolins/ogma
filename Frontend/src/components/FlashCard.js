import React from 'react';
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
    this.handleLearnedClick = this.handleLearnedClick.bind(this);
    this.handleNotLearnedClick = this.handleNotLearnedClick.bind(this);
  }

  handleFlipClick(event) {
    if (this.state.randomIndex === null) {
      this.setState({randomIndex: event.target.value}, () => {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      })
    } else {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  };

  handleLearnedClick(){
    const currentCard = this.props.randomIndex
      this.props.updateLearnedMark((this.props.questionList[currentCard]._id));
        this.setState({
          isFlipped: false
        })
  }

  handleNotLearnedClick(){
    this.setState({
      isFlipped: false,
      randomIndex: Math.floor(Math.random()*Math.floor(this.props.questionList.length))
    })
  }

  render() {
    if (!this.props.questionList.length) {
      return (
        <div className='flash-card-container'>
          <div className='gameover'>Yaaaay! <br></br> You've learned every card :)</div>
        </div>
      )
    }
    const index = this.state.randomIndex || this.props.randomIndex
      return (
        <div className='flash-card-container'>
          <div className="flipcard">
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" flipSpeedBackToFront={0.20} flipSpeedFrontToBack={0.20}>
              <div id='front' key="front" value={index} onClick={this.handleFlipClick}>
                <p className='subtopic'>{this.props.questionList[index].sub_topic}</p>
                <p className='text'>{this.props.questionList[index].question_text}</p>
              </div>
              <div id='back' key="back" value={index} onClick={this.handleFlipClick}>
                <p className='subtopic'>{this.props.questionList[index].sub_topic}</p>
                <p className='text'>{this.props.questionList[index].answer_text}</p>
              </div>
            </ReactCardFlip>
          </div>
        <div className="flashcard-buttons">
          <button aria-label="instructions-button" className="flashcard-button" type="button" data-toggle="modal" data-target="#flashcardsModal">Instructions</button>
        </div>
        <div className="modal fade" id="flashcardsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
              <h5 className="modal-title" id="glashcardsModalLabel">How to play</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Here you can view all of your questions from the bank on index cards.<br></br>
        First, read the question on the front of the card and try to answer it.
        Once you think you have the answer you can click on the index card to flip it and reveal the answer,
        simply click the card again if you want to see the question. <br></br> If you're confident you know it you can click
        '✔' to remove the card from the deck and get the next one. You can also click on '✘' if you feel you haven't
        learned the card yet, this button will also get the next card.
      </div>
    </div>
  </div>
</div>
  <div className='answer-buttons'>
    <button onClick={this.handleLearnedClick} className='answer-button1'>✔</button>
    <button onClick={this.handleNotLearnedClick} className='answer-button2'>✘</button>
  </div>
</div>
      )
  }
}

export default FlashCard

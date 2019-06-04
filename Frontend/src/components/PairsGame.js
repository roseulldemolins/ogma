import React, { Component } from 'react';
import PairsHeader from '../components/PairsHeader';
import PairsCard from '../components/PairsCard';
import PairsGameOver from '../components/PairsGameOver';
import { connect } from 'react-redux';

class PairsGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: Array(16).fill(false),
      shuffledCard: this.makeNewArray(),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  makeNewArray (props) {
    const newArray = [];
    for (var i = 0; i < this.props.QAndA.length; i++) {
      newArray.push(this.props.QAndA[i].matchingID)
    }
    return newArray
  }


  handleClick = event => {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    this.setState({
        prevSelectedCard: this.state.shuffledCard[cardId],
        prevCardId: cardId
    });

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState(prevState => ({
        isFlipped: newFlipps,
        clickCount: this.state.clickCount + 1
      }));

      if (this.state.clickCount === 2) {
        this.setState({ clickCount: 1 });
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCard[cardId];
        const previousCard = this.state.prevSelectedCard;

        this.isCardMatch(previousCard, newCard, prevCardId, cardId);
      }
    }
  };

  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2) {
      const hideCard = this.state.shuffledCard.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout(() => {
        this.setState(prevState => ({
          shuffledCard: hideCard
        }))
      }, 1000);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({ isFlipped: flipBack }));
      }, 1000);
    }
  };

  restartGame = () => {
    this.setState({
      isFlipped: Array(16).fill(false),
      shuffledCard: this.makeNewArray(this.props),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    });
  };

  isGameOver = () => {
    return this.state.isFlipped.every((element, index, array) => element !== false);
  };

  render() {
    return (
     <div className="game">
       <PairsHeader restartGame={this.restartGame} />
       { this.isGameOver() ? <PairsGameOver restartGame={this.restartGame} /> :
       <div className="grid-container">
          {
            this.state.shuffledCard.map((matchingID, index) =>
              <PairsCard
                key={index}
                id={index}
                cardNumber={matchingID}
                isFlipped={this.state.isFlipped[index]}
                handleClick={this.handleClick}
                QAndA={this.props.QAndA[index].text}
              />
            )
          }
        </div>
       }
     </div>
    );
  }
}

export default PairsGame

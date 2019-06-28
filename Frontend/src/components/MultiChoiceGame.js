import React, { Component } from 'react';
import MultiChoiceHeader from '../components/MultiChoiceHeader';
import MultiCCard from '../components/MultiCCard';
import MultiCGameOver from '../components/MultiCGameOver';
import { connect } from 'react-redux';

const filterQuestionsData = require('../helpers/MultiChoiceRandomiser.js');

class MultiChoiceGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: Array(16).fill(false),
      shuffledCard: this.makeNewArray(this.props.MultiC),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1,
      cardsArray: this.props.MultiC
    }
    this.handleClick = this.handleClick.bind(this)
    this.restartGame = this.restartGame.bind(this)
  }

  makeNewArray (array) {
    if (!array) {
      return [];
      }
    const newArray = [];
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
      newArray.push(array[i].matchingID)
    }
    console.log(newArray);
    return newArray
  }

  handleClick (event) {
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

  isCardMatch (card1, card2, card1Id, card2Id) {
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

  restartGame () {
    const newCardSet = filterQuestionsData(this.props.state)
    this.setState({
      isFlipped: Array(16).fill(false),
      shuffledCard: this.makeNewArray(newCardSet),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1,
      cardsArray: newCardSet
    });
  };

  isGameOver = () => {
    return this.state.isFlipped.every((element, index, array) => element !== false);
  };


//----------
//  to go after grid-container
// {
//   this.state.shuffledCard.map((matchingID, index) =>
//     <MultiCCard
//       key={index}
//       id={index}
//       cardNumber={matchingID}
//       isFlipped={this.state.isFlipped[index]}
//       handleClick={this.handleClick}
//       MultiC={this.state.cardsArray[index].text}
//     />
//   )
// }





  render() {
    return (
     <div className="game">
       <MultiChoiceHeader restartGame={this.restartGame} />
       { this.isGameOver() ? <MultiCGameOver restartGame={this.restartGame} /> :
       <div className="grid-container">

        </div>
       }
     </div>
    );
  }
}

export default MultiChoiceGame
import React from 'react';
import ReactCardFlip from "react-card-flip";
import { connect } from 'react-redux';

const PairsCard = (props) => {

return(
  <ReactCardFlip isFlipped={props.isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
    <button id={props.id} className={`card card-front ${props.cardNumber !== -1 ? "" : "hide-card"}`} onClick={props.handleClick} key="front">

    </button>

    <button id={props.id} className={`card card-back ${props.cardNumber !== -1 ? "" : "hide-card"}`} onClick={props.handleClick} key="back">
      { props.cardNumber }
    </button>
  </ReactCardFlip>
)
}


export default PairsCard

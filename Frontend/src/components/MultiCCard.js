import React from 'react';
import ReactCardFlip from "react-card-flip";
import { connect } from 'react-redux';

const MultiCCard = (props) => {
  return(
    <>
    <ReactCardFlip
      isFlipped={props.isFlipped} f
      lipSpeedBackToFront={1}
      flipSpeedFrontToBack={1} >
      <button
        id={props.id}
        aria-label="card-front"
        className={`card card-front ${props.cardNumber !== -1 ? "" : "hide-card"}`}
        onClick={props.handleClick}
        key="front">
      </button>
      <button
        id={props.id}
        className={`card card-back ${props.cardNumber !== -1 ? "" : "hide-card"}`}
        onClick={props.handleClick}
        aria-label="card-back"
        key="back">{props.MultiC}
      </button>
    </ReactCardFlip>
    </>
  )
}

export default MultiCCard

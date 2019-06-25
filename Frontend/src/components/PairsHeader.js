import React from 'react';
import './PairsHeader.css';

const PairsHeader = ({ restartGame }) => (
  <div className="grid-header-container">
    <div className="justify-left timer"></div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
      <div className="pairs-buttons">
        <button
          onClick={restartGame}
          className="pairs-button">
          Start New Game
        </button>
        <button
          className="pairs-button"
          type="button"
          data-toggle="modal"
          data-target="#flashcardsModal">
          Instructions
        </button>
      </div>
    </div>
    <div
      className="modal fade"
      id="flashcardsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div
        className="modal-dialog modal-dialog-centered"
        role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="glashcardsModalLabel">
              How to play
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Here you have a set of 8 questions and answer from your question bank. Some of the cards (when flipped) will show an answer and some will show a question - to complete the game you need to match them up correctly. If you click a card it will flip to reveal the question/answer, you then need to click a second card to flip another. If they match the cards will disappear - if not they will turn back over and you'll need to guess again.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PairsHeader;

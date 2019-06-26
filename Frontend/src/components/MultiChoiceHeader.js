import React from 'react';
import './MultiCHeader.css';

const MultiChoiceHeader = ({ restartGame }) => (
  <div className="grid-header-container">
    <div className="justify-left timer"></div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
      <div className="multi-buttons">
        <button
          onClick={restartGame}
          className="multi-button">
          Start New Game
        </button>
        <button
          className="multi-button"
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
            It's just a simple standard multi choice game.
            Simply select the right answer Simples !
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MultiChoiceHeader;

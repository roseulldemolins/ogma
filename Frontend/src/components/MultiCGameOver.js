import React from 'react';

const MultiCGameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Well done!</h1>
    <button className="restart-button"  onClick={restartGame}>Restart Game</button>
  </div>
);

export default MultiCGameOver;

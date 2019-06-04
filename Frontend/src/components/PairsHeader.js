import React from 'react';

const PairsHeader = ({ restartGame }) => (
  <div className="grid-header-container">
    <div className="justify-left timer"></div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
      <button onClick={restartGame} className="button">Restart Game</button>
    </div>
  </div>
);

export default PairsHeader;

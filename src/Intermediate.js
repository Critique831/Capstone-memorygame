import React from 'react';

function LevelCompletePopup({ onProceed, onRestart, onHome }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Level Completed!</h2>
        <button className="inter" onClick={onProceed}>Proceed to Next Level</button>
        <button className="inter" onClick={onRestart}>Restart Level</button>
        <button className="inter" onClick={onHome}>Go Home</button>
      </div>
    </div>
  );
}

export default LevelCompletePopup;

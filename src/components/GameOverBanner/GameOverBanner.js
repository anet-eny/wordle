import React from 'react';

function GameOverBanner({gameStatus}) {
  if (gameStatus === 'won') {
      return (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )
  } else if (gameStatus === 'lost') {
    return (
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>
    )
  }
  
}

export default GameOverBanner;

import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running')
  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)

    if (guess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }
  
  return <>
          {gameStatus}
          <GuessList
            guesses={guesses}
            answer={answer}
          />
          <GuessInput 
            handleSubmitGuess={handleSubmitGuess}
            gameStatus={gameStatus}
          />
          {gameStatus === 'won' && (
            <WonBanner 
              numOfGuesses={guesses.length}
            />
          )}
          {gameStatus === 'lost' && (
            <LostBanner 
              answer={answer}
            />
          )}
        </>;
}

export default Game;

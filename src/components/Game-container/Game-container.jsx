import Stats from '../Stats/Stats';
import GameGrid from '../Game-grid/Game-grid';
import { useState } from 'react';

function GameContainer() {
  const [movesCount, setMovesCount] = useState(0);
  const [startGame, setStartGame] = useState(true);

  function addMove() {
    setMovesCount(movesCount + 1);
  }

  if (startGame) {
    return (
        <button className='button-reset_hide' onClick={() => setStartGame(false)}>Start Game</button>
    )
  } else {
    return (
      <div>
        <Stats movesCount={movesCount} />
        <GameGrid addMove={addMove} />
        <button className='button-reset_hide' onClick={() => setStartGame(true)}>Reset Game</button>
      </div>
    )
  }
}

export default GameContainer;
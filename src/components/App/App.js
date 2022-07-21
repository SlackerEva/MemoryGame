import GameContainer from '../Game-container/Game-container';
import Stats from '../Stats/Stats';
import './App.css';
import { useState } from 'react';

function App() {
  const [movesCount, setMovesCount] = useState(0);

  function addMove() {
    setMovesCount(movesCount + 1);
  }

  return (
    <div className="App">
      <Stats movesCount={movesCount} />
      <GameContainer addMove={addMove} />
      <button className='button-reset_hide'>Reset Game</button>
    </div>
  );
}

export default App;

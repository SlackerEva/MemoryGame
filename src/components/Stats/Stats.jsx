import './Stats.css';
import { useState, useEffect } from 'react';

function Stats(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Can I do timer better?
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <div className='stats-container'>
      <div className='stats-container__moves'>Moves count: {props.movesCount}{props.countVictory}</div>
      <div className='stats-container__time'>Time: {minutes + ' m.'+ ' : ' + seconds + ' s.'}</div>
    </div>
  )
}

export default Stats;
import './Game-container.css'; 
import Card from '../Card/Card';
import ArrayOfImg from '../../utils/arrayOfImg';
import { useState, useEffect } from 'react';

function GameContainer(props) {

  const [randomArrOfImg, setRandomArrOfImg] = useState([]);

  useEffect(() => {
    let tempArray = [...ArrayOfImg, ...ArrayOfImg];
    tempArray.sort(() => Math.random() - 0.5);
    setRandomArrOfImg(tempArray);
  }, []);

  return (
    <div className='game-grid'>
      {randomArrOfImg.map((img, index) => {
        return <Card key={index} img={img.img} name={img.name} addMove={props.addMove} />
      })}
    </div>
  )
}

export default GameContainer;
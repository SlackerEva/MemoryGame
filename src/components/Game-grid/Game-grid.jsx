import './Game-grid.css'; 
import Card from '../Card/Card';
import ArrayOfImg from '../../utils/arrayOfImg';
import { useState, useEffect } from 'react';

function GameGrid(props) {

  const [randomArrOfImg, setRandomArrOfImg] = useState([]);
  const [firstImg, setFirstImg] = useState('');
  const [secondImg, setSecondImg] = useState('');

  useEffect(() => {
    let tempArray = ArrayOfImg.sort(() => Math.random() - 0.5);
    setRandomArrOfImg(tempArray);
  }, []);

  useEffect(() => {
    if (firstImg !== '' && secondImg !== '') {
      if (firstImg.name !== secondImg.name) {
        setTimeout(function(){
          setRandomArrOfImg([...randomArrOfImg], firstImg.flip = false);
          setRandomArrOfImg([...randomArrOfImg], secondImg.flip = false);
        }, 1000);
      } else {
        victory();
      }
      props.addMove();
      setFirstImg('');
      setSecondImg('');
    }
  }, [props, randomArrOfImg, firstImg, secondImg]);



  function cardClick(id) {
    const imgObj = randomArrOfImg.find(obj => obj.id === id);
    if (imgObj.flip !== true) {
      imgObj.flip = true;
      firstImg === '' ? setFirstImg(imgObj) : setSecondImg(imgObj);
    }
  }

  function victory() {
    if (randomArrOfImg.every(obj => obj.flip === true)) {
      setTimeout(function(){
        alert('You are win!');
      }, 1000);
    }
  }

  return (
    <div className='game-grid'>
      {randomArrOfImg.map((img, index) => {
        return <Card key={index} img={img} cardClick={cardClick} />
      })}
    </div>
  )
}

export default GameGrid;
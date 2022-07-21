import './Game-container.css'; 
import Card from '../Card/Card';
import ArrayOfImg from '../../utils/arrayOfImg';
import { useState, useEffect } from 'react';

function GameContainer(props) {

  const [randomArrOfImg, setRandomArrOfImg] = useState([]);
  const [firstImg, setFirstImg] = useState('');
  const [secondImg, setSecondImg] = useState('');



  useEffect(() => {
    let tempArray = [...ArrayOfImg, ...ArrayOfImg];
    tempArray.sort(() => Math.random() - 0.5);
    setRandomArrOfImg(tempArray);
  }, []);

  useEffect(() => {
    if (firstImg !== '' && secondImg !== '') {
      props.addMove();
      setFirstImg('');
      setSecondImg('');
    }
  }, [props, firstImg, secondImg]);

  function setImgForCompare(props) {
    firstImg === '' ? setFirstImg(props.name) : setSecondImg(props.name);
  }
  

  return (
    <div className='game-grid'>
      {randomArrOfImg.map((img, index) => {
        return <Card key={index} img={img.img} name={img.name} addMove={props.addMove} setImgForCompare={setImgForCompare} />
      })}
    </div>
  )
}

export default GameContainer;
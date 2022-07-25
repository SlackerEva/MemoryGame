import './Game-container.css'; 
import Card from '../Card/Card';
import ArrayOfImg from '../../utils/arrayOfImg';
import { useState, useEffect } from 'react';

function GameContainer(props) {

  const [randomArrOfImg, setRandomArrOfImg] = useState([]);
  const [firstImg, setFirstImg] = useState('');
  const [secondImg, setSecondImg] = useState('');
  const [firstEvent, setFirstEvent] = useState();
  const [secondEvent, setSecondEvent] = useState();



  useEffect(() => {
    let tempArray = [...ArrayOfImg, ...ArrayOfImg];
    tempArray.sort(() => Math.random() - 0.5);
    setRandomArrOfImg(tempArray);
  }, []);

//Can I do this better? Without DOM manipulation?

  useEffect(() => {
    console.log(firstImg, secondImg);
    if (firstImg !== '' && secondImg !== '') {
      if (firstImg.id !== secondImg.id) {
        setTimeout(function(){
          firstEvent.classList.remove('flipped');
          secondEvent.classList.remove('flipped');
        }, 1000);
      }
      props.addMove();
      setFirstImg('');
      setSecondImg('');
    }
  }, [props, firstImg, secondImg]);

  function setImgForCompare(props, event) {
    firstImg === '' ? setFirstImg(props) : setSecondImg(props);
    firstImg === '' ? setFirstEvent(event) : setSecondEvent(event);
  }
  

  return (
    <div className='game-grid'>
      {randomArrOfImg.map((img, index) => {
        return <Card key={index} img ={img} addMove={props.addMove} setImgForCompare={setImgForCompare} />
      })}
    </div>
  )
}

export default GameContainer;
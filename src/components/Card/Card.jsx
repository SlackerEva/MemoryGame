import './Card.css';

function Card(props) {

  function handleClick(event) {
    event.currentTarget.classList.toggle('flipped');
    props.setImgForCompare(props.name);
  }

  return (
    <div className='card-container' onClick={handleClick}>
      <div className='card-container__before'>
        <img className='card-container__img' src={props.img} alt={props.name} />
      </div>
    </div>
  )
}

export default Card;
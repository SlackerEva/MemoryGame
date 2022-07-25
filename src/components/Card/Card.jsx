import './Card.css';

function Card(props) {
  const {img, name} = props.img;

  function handleClick(event) {
    if (!event.currentTarget.classList.contains('flipped')) {
      event.currentTarget.classList.add('flipped');
      props.setImgForCompare(props.img, event.currentTarget);
    }
  }

  return (
    <div className='card-container' onClick={handleClick}>
      <div className='card-container__before'>
        <img className='card-container__img' src={img} alt={name} />
      </div>
    </div>
  )
}

export default Card;
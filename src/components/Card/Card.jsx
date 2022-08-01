import './Card.css';

function Card(props) {
  const {id, img, name, flip} = props.img;

  return (
    <div className={`card-container ${flip ? 'flipped' : ''}`} onClick={() => props.cardClick(id)}>
      <div className='card-container__before'>
        <img className='card-container__img' src={img} alt={name} />
      </div>
    </div>
  )
}

export default Card;
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className='card'>{classes}</div>;
}
export default Card;

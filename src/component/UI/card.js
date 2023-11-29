
import '../UI/card.css'

const Card= (props)=> {
  const classes = 'card ' + props.className;
  return <div className='card'>{classes}</div>;
}
export default Card;

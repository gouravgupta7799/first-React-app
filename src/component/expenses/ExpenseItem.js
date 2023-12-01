import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails"
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const EditTitle = ( ) => {
    console.log('Clicked!! for Edit')
  }

  const Delete = (id) => {
    console.log('Clicked!! for Delete')
  }
  return (
    <Card className="expense-item">

      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <ExpenseDetails amount={props.amount} />
      </div>
      <button onClick={() => { EditTitle() }}>Edit title</button>
      <button onClick={() => { Delete() }}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
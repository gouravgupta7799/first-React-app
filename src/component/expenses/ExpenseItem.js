import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails"
// import Card from '../UI/card';

const ExpenseItem=(props)=> {
  return (
    <card className="expense-item">

      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <ExpenseDetails amount={props.amount} />

      </div>
    </card>
  );
}

export default ExpenseItem;
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails"
import Card from '../UI/Card';
import { useState } from 'react';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)

  const EditTitle = (props) => {
    setTitle('new Updated')
    console.log('Clicked!! for Edit')
  }
  const EditAmount = (props) => {
    setAmount(100)
    console.log('Clicked!! for Amount')
  }

  const Delete = (expense) => {
    props.DeleteFrom(expense)
    console.log('Clicked!! for Delete')
  }

  return (
    <Card className="expense-item">

      <div className="expense-item__description">

        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <h2>{props.location}</h2>
        <ExpenseDetails amount={amount} />
        <button onClick={() => { EditAmount(props) }} className="btn editAmountBtn">Edit amount</button>
      </div>
      <button onClick={() => { EditTitle(props) }} className="btn editTitleBtn">Edit title</button>
      <button onClick={() => { Delete(props) }} className="btn deleteBtn">Delete</button>
    </Card>
  );
}

export default ExpenseItem;
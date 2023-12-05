import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails"
import Card from '../UI/Card';
import { useState } from 'react';


const ExpenseItem = (props) => {
  const [title,setTitle]=useState(props.title)
  const [amount, setAmount]=useState(props.amount)

  const EditTitle = (props) => {
    console.log('Clicked!! for Edit')
    setTitle('new Updated')
  }
  const EditAmount = (props) => {
    console.log('Clicked!! for Amount')
    setAmount(100)
  }

  const Delete = (id) => {
    console.log('Clicked!! for Delete')
  }

  return (
    <Card className="expense-item">

      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <h2>{props.location}</h2>
        <ExpenseDetails amount={amount} />
        <button onClick={() => { EditAmount(props) }}>Edit amount</button>
      </div>
      <button onClick={() => { EditTitle(props) }}>Edit title</button>
      <button onClick={() => { Delete() }}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
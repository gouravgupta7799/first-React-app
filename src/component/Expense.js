import React from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

export default function Expense(props) {
  return (<div className='expenses'>
    {
      props.expenses.length === 0 ? 'no expenses to display' :
        props.expenses.map((expenses) => {
          return (
            <ExpenseItem
              title={expenses.title}
              location={expenses.location}
              amount={expenses.amount}
              date={expenses.date}
            ></ExpenseItem >
          )
        })
    }
  </div>
  )
}

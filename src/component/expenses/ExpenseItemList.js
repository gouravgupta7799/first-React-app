import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseItemList.css';

const ExpenseItemList = (props) => {

  const DeleteFromUl = (expenses) => {

    props.DeleteFrom(expenses)
  }


  let msg = '';

  if (props.filteredExpenses.length === 0) {
    msg = <h2 className='.expenses-list__fallback'>no expenses to display</h2>
  } else if (props.filteredExpenses.length === 1) {
    msg = <h2 className='.expenses-list__fallback'> Only single Expense here.Please add more...</ h2>
  }

  return (
    <ul className='expenses-list'>
      {msg}
      {props.filteredExpenses.map((expenses) => {
        return (
          <ExpenseItem
            key={expenses.id}
            id={expenses.id}
            title={expenses.title}
            location={expenses.location}
            amount={expenses.amount}
            date={expenses.date}
            DeleteFromUl={DeleteFromUl}
          />
        )
      })}
    </ul>
  )
}
export default ExpenseItemList;
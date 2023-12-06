import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseFilter.css';

const Expense = (props) => {
  const [filteredYear, setFilterYear] = useState('2023')
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }
  const DeleteFrom = (expense) => {
    props.DeleteFromList(expense)
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseItemDetail = '';
  let msg = '';

  
  if (filteredExpenses.length === 0) {
    msg = <p>no expenses to display</p>
  } else if (filteredExpenses.length === 1) {
    msg = < p > Only single Expense here.Please add more...</ p>
  }
  expenseItemDetail = filteredExpenses.map((expenses) => {
    return (
      <ExpenseItem
        key={expenses.id}
        id={expenses.id}
        title={expenses.title}
        location={expenses.location}
        amount={expenses.amount}
        date={expenses.date}
        DeleteFrom={DeleteFrom}
      />
    )
  })


  return (<div className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {msg}
    {expenseItemDetail}

  </div>
  )
}

export default Expense;
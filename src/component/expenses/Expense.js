import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItemList from "./ExpenseItemList";
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseFilter.css';
import ExpensesChart from './ExpensesChart';

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


  return (<div className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpenseItemList filteredExpenses={filteredExpenses} DeleteFrom={DeleteFrom} />

  </div>
  )
}

export default Expense;
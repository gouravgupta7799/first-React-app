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
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (<div className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {
      filteredExpenses.length === 0 ? 'no expenses to display' :
        filteredExpenses.map((expenses) => {
          return (
            <ExpenseItem
              key={expenses.id}
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

export default Expense;
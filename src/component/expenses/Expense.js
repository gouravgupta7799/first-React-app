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
  return (<div className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {
      props.expenses.length === 0 ? 'no expenses to display' :
        props.expenses.map((expenses) => {
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
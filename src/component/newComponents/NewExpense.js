import React from 'react';
import NewExpenseForm from './NewExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {
  const newExpenseAdded = (newExp) => {
    const newExpenses = {
      ...newExp,
      id: Math.random().toString()
    }
    props.addToList(newExpenses)
  }
  return (
    <div className='new-expense'>
      <NewExpenseForm newExpenseAdded={newExpenseAdded} />
    </div>
  )
}

export default NewExpense;
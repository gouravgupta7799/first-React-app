import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const newExpenseAdded = (newExp) => {
    const newExpenses = {
      ...newExp,
      id: Math.random().toString()
    }
    props.addToList(newExpenses)
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm newExpenseAdded={newExpenseAdded}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}

export default NewExpense;
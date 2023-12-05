
import { useState } from 'react';
import './app.css';
import Expense from './component/expenses/Expense';
import NewExpense from './component/newComponents/NewExpense';

const App = () => {
  const [expenses, addExpenseHandler] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      location: "Bangalore",
      amount: 94.12,
      date: new Date(2023, 10, 27),
    },
    {
      id: "e2",
      location: "Delhi",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      location: "Chennai",
      amount: 294.67,
      date: new Date(2021, 11, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      location: "Kerala",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const addToList = (ex) => {
    const exp = {
      ...ex
    }
    addExpenseHandler([...expenses, exp]);
    console.log(exp)
  }
  return (
    <div className='head'>
      <h2>Let's get started!</h2>
      <NewExpense addToList={addToList} />
      {
        <Expense
          expenses={expenses} >
        </Expense >
      }
    </div>
  );
}

export default App;
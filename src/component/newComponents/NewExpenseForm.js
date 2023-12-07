import React, { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState('')
  const [enterDate, setEnterDate] = useState('')
  const [enterPrice, setEnterPrice] = useState('')
  // const [userInput, setUserInput] = useState({
  //   setEnterTitle: '',
  //   setEnterDate: '',
  //   setEnterPrice: ''
  // })
  const titleChange = (event) => {
    setEnterTitle(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   setEnterTitle: event.target.value
    // })
  }
  const dateChange = (event) => {
    setEnterDate(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   setEnterDate: event.target.value
    // })
  }
  const priceChange = (event) => {
    setEnterPrice(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   setEnterPrice:
    //     event.target.value
    // })
  }
  const submitHendler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: enterTitle,
      amount: enterPrice,
      date: new Date(enterDate),

    }
    props.newExpenseAdded(expenseData)
    setEnterTitle('')
    setEnterDate('')
    setEnterPrice('')

  }
  return (
    <form onSubmit={submitHendler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <div>
            <input type="text" value={enterTitle} onChange={titleChange} />
            <label>title</label>
          </div>
        </div>
      </div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <div>
            <input type="number" value={enterPrice} min='0.01' step='0.01' onChange={priceChange} />
            <label>amount</label>
          </div>
        </div>
      </div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <div>
            <input type="date" value={enterDate} min='2021-01-01' max='2024-12-31' onChange={dateChange} />
            <label>date</label>
          </div>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>add Expenses</button>
      </div>
    </form>
  )
}

export default NewExpenseForm;
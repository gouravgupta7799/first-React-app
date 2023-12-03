import React, { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = () => {
  const [enterTitle,setEnterTitle]=useState('')
  const [enterDate, setEnterDate]=useState('')
  const [enterPrice, setEnterPrice] = useState('')
  
  const titleChange = (event) => {
    setEnterTitle(event.target.value)
    console.log(event.target.value)
  }
  const dateChange = (event) => {
    setEnterDate(event.target.value)
    console.log(event.target.value)
  }
  const priceChange = (event) => {
    setEnterPrice(event.target.value)
    console.log(event.target.value)
  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <div>
            <input type="text" onChange={titleChange} />
            <label>title</label>
          </div>
        </div>
      </div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <div>
            <input type="number" min='0.01' step='0.01' onChange={priceChange} />
            <label>price</label>
          </div>
        </div>
      </div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <div>
            <input type="date" min='2023-12-01' max='2024-03-01' onChange={dateChange} />
            <label>date</label>
          </div>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>add Expenses</button>
      </div>
    </form>
  )
}

export default NewExpenseForm
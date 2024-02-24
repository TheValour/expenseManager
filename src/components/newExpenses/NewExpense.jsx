import { useState } from 'react'
import './NewExpense.css'
import Form from './Form'

export default function NewExpense({addExpense}) {
  const [flag, setFlag] = useState(true);
  const clickHandler = () =>{
    setFlag((pre) => !pre);
  }
  const saveFormData = (enterData) =>{
    const exp = {
      ...enterData,
      id : Math.random().toString()
    }
    addExpense(exp);
    clickHandler();
  };

  return (
    <div className='new-expense'>
        {flag ?<button onClick={clickHandler}>New Expense</button>:
        <Form 
          saveFormData = {saveFormData} 
          clickHandler = {clickHandler}
        />}
    </div>
  )
}

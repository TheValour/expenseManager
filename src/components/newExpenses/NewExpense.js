import React from 'react'
import './NewExpense.css'
import Form from './Form'

export default function NewExpense({addExpense}) {
  const saveFormData = (enterData) =>{
    const exp = {
      ...enterData,
      id : Math.random().toString()
    }
    //console.log(exp);
    addExpense(exp);
  };

  return (
    <div className='new-expense'>
        <Form saveFormData = {saveFormData}/>
    </div>
  )
}

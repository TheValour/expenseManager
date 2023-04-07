import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function Expense({amount, title, date}) {
  const [newtitle, setTitle] = useState(title);
  const clickHandler = ()=>{
    setTitle("Update");
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date = {date}/>
      <div className='expense-item__description'>
        <h2>{newtitle}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  )
}

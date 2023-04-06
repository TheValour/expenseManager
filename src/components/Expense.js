import React from 'react'
import './Expense.css'

export default function Expense({amount, title, date}) {
 
  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </div>
  )
}

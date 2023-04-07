import React from 'react'
import Expense from "./ExpenseItem";
import './Expense.css'
import Card from '../UI/Card';

export default function ExpenseItem({expense}) {
        
  return (
    <Card className='expenses'>
      <Expense
        title ={expense[0].title}
        amount ={expense[0].amount}
        date ={expense[0].date}
      />
      <Expense
        title ={expense[1].title}
        amount ={expense[1].amount}
        date ={expense[1].date}
      />
      <Expense
        title ={expense[2].title}
        amount ={expense[2].amount}
        date ={expense[2].date}
      />
      <Expense
        title ={expense[3].title}
        amount ={expense[3].amount}
        date ={expense[3].date}
      />
    </Card>
  )
}

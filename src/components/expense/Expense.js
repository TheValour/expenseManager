import React from 'react'
import Expense from "./ExpenseItem";
import './Expense.css'
import Card from '../UI/Card';

export default function ExpenseItem() {
    const expense = [
        {
          id: "e1",
          title: "Rent",
          amount: 800,
          date: new Date(2023, 5, 1),
        },
    
        {
          id: "e2",
          title: "Groceries",
          amount: 55.5,
          date: new Date(2023, 9, 2),
        },
    
        {
          id: "e3",
          title: "Phone Bill",
          amount: 60.75,
          date: new Date(2023, 4, 3),
        },
        {
          id: "e4",
          title: "Movie Bill",
          amount: 609.75,
          date: new Date(2023, 8, 1),
        },
      ];
    
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

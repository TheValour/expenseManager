import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function Expense({amount, title, date}) {
  
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date = {date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{amount}</div>
        </div>
      </Card>
    </li>
  )
}

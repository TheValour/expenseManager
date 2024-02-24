import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({items}) {
    // we can have jsx as value of variable
    if (items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">NO such expenses.</h2>
        ) 
    }

    return (
        <ul className="expenses-list">
            {  items.map((expense) => {
                return(
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                    )
                })
            }   
        </ul>
    )
}

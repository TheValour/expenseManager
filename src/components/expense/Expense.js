import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

export default function Expense({ expense }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      
      {expense.map((exp) => {
        return (
          <ExpenseItem
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        )
      })}
    </Card>
  );
}

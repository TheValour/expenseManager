import React, { useState } from "react";
import "./Expense.css";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

export default function Expense({ expense }) {
  const [filteredYear, setFilteredYear] = useState("All");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  let filteredExpenses = expense;
  if (filteredYear !== "All") {
    filteredExpenses = expense.filter((expense) => {
      return expense.date.getFullYear() == filteredYear;
    });
  }
  // we can have jsx as value of variable
  let expenseContent = <h1><p>No such expenses</p></h1>;
  if(filteredExpenses.length){
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
}

import React, { useState } from "react";
import "./Expense.css";

import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

export default function Expense({ expense }) {
  const [filteredYear, setFilteredYear] = useState("All");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = expense;
  if (filteredYear !== "All") {
    filteredExpenses = expense.filter((expense) => {
      return expense.date.getFullYear() == filteredYear;
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items = {filteredExpenses}/>
    </Card>
  );
}

import React, { useState } from "react";
import "./Expense.css";

import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
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
      <ExpenseChart expense={filteredExpenses}/>
      <ExpenseList items = {filteredExpenses}/>
    </Card>
  );
}

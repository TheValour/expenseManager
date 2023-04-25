import React from 'react'
import "./App.css";
import Expense  from "./components/expense/Expense";
import NewExpense from "./components/newExpenses/NewExpense";

function App() {
  const [expense, setExpense] = React.useState([
    {
      id: "e1",
      title: "Rent",
      amount: 800,
      date: new Date(2022, 5, 1),
    },

    {
      id: "e2",
      title: "Groceries",
      amount: 55.5,
      date: new Date(2022, 9, 2),
    },

    {
      id: "e3",
      title: "Phone Bill",
      amount: 60.75,
      date: new Date(2021, 4, 3),
    },
    {
      id: "e4",
      title: "Movie Bill",
      amount: 609.75,
      date: new Date(2019, 8, 1),
    },
  ])

  const addExpense = (exp) => {
      setExpense((prevExpenses) => {
      return [exp, ...prevExpenses];
    });
  };

  return (
    <div className='App-header'>
      hello
      <NewExpense addExpense = {addExpense}/>
      <Expense expense={expense}/>
    </div>
  );
}

export default App;

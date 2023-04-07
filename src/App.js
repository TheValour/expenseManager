import "./App.css";
import Expense  from "./components/expense/Expense";
import NewExpense from "./newExpenses/NewExpense";

function App() {
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

  const addExpense = exp =>{
    console.log("In app.js");
    console.log(exp);
  }

  return (
    <div className='App-header'>
      hello
      <NewExpense addExpense = {addExpense}/>
      <Expense expense={expense}/>
    </div>
  );
}

export default App;

import "./App.css";
import Expense from "./components/Expense";

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
      date: new Date(2023, 5, 2),
    },

    {
      id: "e3",
      title: "Phone Bill",
      amount: 60.75,
      date: new Date(2023, 5, 3),
    },
  ];

  return (
    <div className='App-header'>
      Lets start
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
    </div>
  );
}

export default App;

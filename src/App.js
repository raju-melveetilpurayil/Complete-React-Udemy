import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenseDate = new Date(2021, 2, 25);
  const expenseTitle = 'Car insurance';
  const expenseAmount = 298.34;
  const expenses = [{
    id: 'e1',
    date: new Date(2021, 2, 25),
    amount: 234.59,
    title: "Car finance"
  },
  {
    id: 'e2',
    date: new Date(2021, 2, 21),
    amount: 134.59,
    title: "Credit card"
  },
  {
    id: 'e3',
    date: new Date(2021, 2, 24),
    amount: 334.59,
    title: "Bank loan"
  }
  ];

  return (
    <div>
      <h1>This is the app</h1>
      <Expenses expenses={expenses}/>
    </div>
  );
}
export default App;

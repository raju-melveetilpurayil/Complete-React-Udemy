
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [{
    id: 'e1',
    date: new Date(2021, 2, 25),
    amount: 234.59,
    title: "New TV"
  },
  {
    id: 'e2',
    date: new Date(2021, 2, 12),
    amount: 134.59,
    title: "Toilet Paper"
  },
  {
    id: 'e3',
    date: new Date(2021, 2, 24),
    amount: 334.59,
    title: "Car Insuarance"
  }, 
  {
    id: 'e4',
    date: new Date(2021, 2, 27),
    amount: 560.75,
    title: "New Desk (Wooden)"
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

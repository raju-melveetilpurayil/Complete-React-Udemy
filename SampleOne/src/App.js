
import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NexExpense/NewExpense";

function App() {
  const DUMMY_EXPENSES = [{
    id: 'e1',
    date: new Date(2022, 2, 25),
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
    date: new Date(2019, 2, 24),
    amount: 334.59,
    title: "Car Insuarance"
  }, 
  {
    id: 'e4',
    date: new Date(2019, 2, 27),
    amount: 560.75,
    title: "New Desk (Wooden)"
  }
  ];
 const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const onAddExpensesHandler=expense=>{
    setExpenses(previousExpenses=>{
      return [expense,...previousExpenses]
    });
  }

  return (
    <div>
     <NewExpense  onAddExpenses={onAddExpensesHandler}/>
     <Expenses expenses={expenses}/>
    </div>
  );
}
export default App;

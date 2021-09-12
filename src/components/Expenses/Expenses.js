import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = ({ expenses }) => {
    const [filterYear,setFilterYear]=useState(2020);

    const onfilterExpenseHandler=year=>{
      setFilterYear(year);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onFilterExpense={onfilterExpenseHandler} />
                {
                    expenses.map((expense) =>
                    (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                    ))}
            </Card>
        </div>
    )
}

export default Expenses

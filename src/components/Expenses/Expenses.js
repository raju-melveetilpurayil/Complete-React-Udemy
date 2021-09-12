import { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState(2020);

    const onfilterExpenseHandler = year => {
        setFilterYear(year);
    }
    const resultExpense = expenses.filter(x => { return x.date.getFullYear().toString() === filterYear });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onFilterExpense={onfilterExpenseHandler} />
                <ExpensesChart expenses={resultExpense}/>
                <ExpensesList item={resultExpense}/>
            </Card>
        </div>
    )
}

export default Expenses

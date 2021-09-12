import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpenses}) => {
    const saveExpenseHandler=expense=>{
        const expenseData={
            ...expense,
            id:Math.floor(Math.random().toString()*10000)+1
        };
        onAddExpenses(expenseData);
    };

    return (
        <div className='new-expense'>
              <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    )
}

export default NewExpense

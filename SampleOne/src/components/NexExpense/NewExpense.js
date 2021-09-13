import React from 'react'
import { useState } from 'react/cjs/react.development';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpenses}) => {
    const [isEditing,setIsEditing]=useState(false);
    const saveExpenseHandler=expense=>{
        const expenseData={
            ...expense,
            id:(Math.floor(Math.random().toString()*10000)+1).toString()
        };
        onAddExpenses(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const onCancelEventHandler=()=>{
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing&&<button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing&& <ExpenseForm onSaveExpenseData={saveExpenseHandler} stopEditingHandler={onCancelEventHandler}/>}
        </div>
    )
}

export default NewExpense

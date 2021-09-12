import React,{useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData,stopEditingHandler}) => {

    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');

    const titleChangeHandler=event=>{
        setTitle(event.target.value);
    };
    const amountChangeHandler=event=>{
        setAmount(event.target.value);
    };
    const dayChangeHandler=event=>{
        setDate(event.target.value);
    };
    
    const onSubmitHandler=event=>{
        event.preventDefault();
        var expenseData={
            title:title,
            date:new Date(date),
            amount:parseFloat(amount),
        };
        onSaveExpenseData(expenseData);
        setDate('');
        setAmount('');
        setTitle('');
    }
    const onCancelHandler=()=>{
        stopEditingHandler();
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={dayChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
               <button type='button' onClick={onCancelHandler}>Cancel</button>
               <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm

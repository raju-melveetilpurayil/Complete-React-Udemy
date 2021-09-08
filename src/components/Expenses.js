import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
    return (
        <>
            {
            expenses.map((expense) =>
            (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
            ))}
        </>
    )
}

export default Expenses

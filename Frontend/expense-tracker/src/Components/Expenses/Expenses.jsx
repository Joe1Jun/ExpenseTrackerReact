
import React, { useEffect } from 'react'
import styled from 'styled-components'
// This imports global context so the methods can be accessed
import { useGlobalContext } from '../../context/globalContext';
// Import inner layout from styles
import { InnerLayout } from '../../styles/Layouts';
// Import the Transaction item which will display the expense items
import TransactionItem from '../TransactionItem/TransactionItem';
// import the expense form where the user enter the expense information
import ExpenseForm from './ExpenseForm';

// This function The `Expenses` function is a React component that manages and displays a list of expenses. It fetches expenses from a global context on mount and displays them along with a form to add new expenses.
function Expenses() {
    // All the necessary objects, arrays and methods are destructured from the globalContext for use on the Expense Page.
    const {addExpense, expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()
// Calls `getExpenses` on component mount using `useEffect`.
    useEffect(() =>{
        getExpenses()
    }, [])
    return (
//Everything is containe inside the ExpenseStyled component that is styled on this page 
        // Inner Layout is imported from layouts and styles and has very basic style for the inner part of the page.
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                {/* The total expenses function is called to display the total expenses in the UI*/}
                <h2 className="total-income">Total Expenses: <span>${totalExpenses()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {/* Here the expenses set in globalContext and imported for use in this component are mapped over 
                            Each expense object in the array is destructured and these values are passes through props to the  */}
                        {expenses.map((expense) => {
                            const {_id, title, amount, date, category, description, type} = expense;
                            console.log(expense)
                            return <TransactionItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default Expenses
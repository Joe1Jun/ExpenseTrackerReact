import React from "react";
import styled from 'styled-components'
import { InnerLayout } from "../../styles/Layouts";


function Expenses() {
    return (
        
        <ExpensesStyled>
            <InnerLayout>
            <h1>Expenses</h1>
                <div className="income-content">
                    <div className="form-container"></div>
                    <div className="incomes"></div>
                </div>


            </InnerLayout>



        </ExpensesStyled>
    )

}

const ExpensesStyled = styled.div`








`;

export default Expenses;
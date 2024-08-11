import React, { useEffect } from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from '../Form/Form';
import IncomeItem from "../IncomeItem/IncomeItem";

function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome } = useGlobalContext();

    useEffect(() => {
        getIncomes(); // Correct function call
    }, [incomes]);

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date, category, description } = income; 
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount} // Pass amount
                                    date={date}
                                    category={category}
                                    indicatorColor='var(--color-green)'
                                    deleteItem={deleteIncome}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
    /* Add your styles here */

    display: flex;
    overflow: auto;

   .income-content{
       display: flex;
       gap: 2rem;
       .incomes{
        flex: 1;
       }
   }


`;

export default Income;

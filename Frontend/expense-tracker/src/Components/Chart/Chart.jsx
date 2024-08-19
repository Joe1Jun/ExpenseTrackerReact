import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    // Combine all transactions and sort by date
    const allTransactions = [...incomes, ...expenses].sort((a, b) => new Date(a.date) - new Date(b.date))

    // Create an array of unique, sorted dates
    const labels = [...new Set(allTransactions.map(transaction => dateFormat(transaction.date)))]

    const data = {
        labels,
        datasets: [
            {
                label: 'Income',
                data: labels.map(date => {
                    const income = incomes.find(inc => dateFormat(inc.date) === date)
                    return income ? income.amount : 0
                }),
                backgroundColor: 'green',
                borderColor: 'green',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: labels.map(date => {
                    const expense = expenses.find(exp => dateFormat(exp.date) === date)
                    return expense ? expense.amount : 0
                }),
                backgroundColor: 'red',
                borderColor: 'red',
                tension: 0.2
            }
        ]
    }

    return (
        <ChartStyled >
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart
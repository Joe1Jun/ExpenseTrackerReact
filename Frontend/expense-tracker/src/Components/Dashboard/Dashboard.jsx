import React from "react";
import styled from 'styled-components'
import { InnerLayout } from "../../styles/Layouts";


function Dashboard() {
    return (
        
        <DashboardStyled>
            <InnerLayout>
            <h1>Dashboard</h1>
                <div className="income-content">
                    <div className="form-container"></div>
                    <div className="incomes"></div>
                </div>



            </InnerLayout>





        </DashboardStyled>
    )

}

const DashboardStyled = styled.div`








`;

export default Dashboard;
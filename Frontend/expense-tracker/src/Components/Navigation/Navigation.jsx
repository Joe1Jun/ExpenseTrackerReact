import React from "react"
import styled from "styled-components"
import avatar from '../../img/bg.jpg'

function Navigation() {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Joe</h2>
                    <p>Your Money</p>
                </div>
            </div>
        </NavStyled>
    )
}


const NavStyled = styled.nav`





`;

export default Navigation
// src/Components/HomePage/HomePage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '../Login/Login';
import Register from '../Register/Register';

function HomePage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <HomePageStyled>
      <div className="form-container">
        <div className="form-header">
          <h2 onClick={() => setIsRegister(false)} className={!isRegister ? 'active' : ''}>
            Login
          </h2>
          <h2 onClick={() => setIsRegister(true)} className={isRegister ? 'active' : ''}>
            Register
          </h2>
        </div>
        {isRegister ? <Register /> : <Login />}
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  .form-container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
    width: 350px;
  }

  .form-header {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.5rem;

    h2 {
      cursor: pointer;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid transparent;
    }

    h2.active {
      border-bottom: 2px solid #000;
    }
  }
`;

export default HomePage;

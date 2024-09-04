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
  background: linear-gradient(to right, #f7f7f7, #e2e2e2);
  font-family: 'Arial', sans-serif;

  .form-container {
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 400px;
    transition: transform 0.3s ease-in-out;
  }

  .form-header {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.5rem;

    h2 {
      cursor: pointer;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
      transition: color 0.3s ease, border-bottom 0.3s ease;
    }

    h2.active {
      border-bottom: 2px solid #007bff;
      color: #007bff;
    }
  }

  .form-header h2:not(.active):hover {
    color: #007bff;
  }
`;

export default HomePage;

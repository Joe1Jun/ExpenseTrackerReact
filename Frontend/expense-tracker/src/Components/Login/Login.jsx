// src/Components/Login/Login.jsx
import React, { useState } from 'react';
import { useGlobalContext } from "../../context/globalContext";
import styled from 'styled-components';


function Login() {
const { loginUser} = useGlobalContext();  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const { email, password } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    loginUser(formData)
    //reset input state  of form to be empty after item is added
    setFormData({
    
    email: '',
    password: '',
   


    })
  };
  return (
    <LoginStyled>
      <form onSubmit={handleSubmit}>
        <div className="input-control">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-control">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="submit-btn">
          <button type="submit">Login</button>
        </div>
      </form>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  .input-control {
    margin-bottom: 1rem;
  }
  .error {
    color: red;
    margin-bottom: 1rem;
  }
`;

export default Login;

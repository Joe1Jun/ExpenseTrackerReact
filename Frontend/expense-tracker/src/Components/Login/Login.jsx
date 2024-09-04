// src/Components/Login/Login.jsx
import React, { useState } from 'react';
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate } from 'react-router-dom';
import { FormContainer, InputControl, Button, Error } from '../../styles/Layouts';
import styled from 'styled-components';


function Login() {
  const { loginUser } = useGlobalContext();  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const { email, password } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await loginUser(formData);
      navigate('/dashboard'); // Navigate to the dashboard after successful login
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputControl>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
        </InputControl>
        <InputControl>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </InputControl>
        {error && <Error>{error}</Error>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </FormContainer>
  );
}

export default Login;


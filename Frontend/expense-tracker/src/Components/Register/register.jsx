// src/Components/Register/Register.jsx
import React, { useState } from 'react';
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate } from 'react-router-dom';
import { FormContainer, InputControl, Button, Error } from '../../styles/Layouts';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { addUser } = useGlobalContext();
  
  const { name, email, password, passwordConfirm } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await addUser(formData);
      // Optionally handle post-registration behavior here, e.g., redirecting
      navigate('/dashboard'); // Navigate to the dashboard after successful login
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputControl>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            required
          />
        </InputControl>
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
        <InputControl>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={handleChange}
            required
          />
        </InputControl>
        {error && <Error>{error}</Error>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </FormContainer>
  );
}

export default Register;

// src/Components/Register/register.jsx
import React, { useState } from 'react';
import { useGlobalContext } from "../../context/globalContext";

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

    const { addUser } = useGlobalContext();
  const { name, email, password, passwordConfirm } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    addUser(formData)
    //reset input state  of form to be empty after item is added
    setFormData({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',


    })
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="passwordConfirm" value={passwordConfirm} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

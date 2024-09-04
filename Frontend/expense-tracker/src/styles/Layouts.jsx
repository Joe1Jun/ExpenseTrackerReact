import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
    
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
    
`;

// Style for the login and register pages
export const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  margin: auto;
`;

// Common header styles for login and register forms
export const FormHeader = styled.div`
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

  h2:not(.active):hover {
    color: #007bff;
  }
`;

// Style for form fields
export const InputControl = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  input:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Style for buttons
export const Button = styled.button`
  background-color: #2e7fdc;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

// Style for error messages
export const Error = styled.p`
  color: red;
  margin-bottom: 1rem;
`;
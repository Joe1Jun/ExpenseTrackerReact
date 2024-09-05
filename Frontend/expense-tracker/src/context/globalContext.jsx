import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';


// Base URL for the API created in the backend folder already.
const BASE_URL = "http://localhost:5000/api/v1/";

// Create a context object using React.createContext()
// This will be used to provide and consume global state in the application
const GlobalContext = createContext()

// GlobalProvider component that wraps around the children components to provide them with global state and functions
export const GlobalProvider = ({ children }) => {

    
    
    const [user, setUser] = useState();
        

    
     // State to store incomes
    const [incomes, setIncomes] = useState([])
    // State to store expenses
    const [expenses, setExpenses] = useState([])
    // State to store errors
    const [error, setError] = useState([])
    

    const addUser = async (user) => {
        try {
          const response = await axios.post(`${BASE_URL}register`, user);
          console.log('User added:', response.data);
          // Handle successful registration if needed
        } catch (error) {
          console.error('Error adding user:', error.response ? error.response.data.message : error.message);
          throw new Error(error.response ? error.response.data.message : 'Registration failed');
        }
      };
      
     const loginUser = async (user) => {
        try {
            const response = await axios.post(`${BASE_URL}login`, user, { withCredentials: true });
            // Update user state only after successful login
            setUser(response.data.user);
            console.log('User logged in');
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data.message : error.message);
            setError(error.response.data.message);
        }
    }
    
    
     const logoutUser = async () => {
        try {
            await axios.post(`${BASE_URL}logout`, {}, { withCredentials: true });
            // Clear the user state
            setUser(null);
            console.log('User logged out');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    }
    
     // Function to add income by making a POST request to the server
     const addIncome = async (income) => {
        
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income, { withCredentials: true });
            console.log('Income added')
        } catch (error) {
            setError(error.response.data.message);
        }
         getIncomes()
     }
    // Function to getincomes by making a get request to the server
    const getIncomes = async () => {
         
        try { 

            // The URL is constructed using the BASE_URL constant and the 'get-incomes' endpoint.
            const response = await axios.get(`${BASE_URL}get-incomes`, { withCredentials: true })
            // If the request is successful, store the received data in the 'incomes' state variable.
            setIncomes(response.data)
            console.log(response.data)
        } catch (error) {
            // If there's an error with the request, catch it and store the error message
           // in the 'error' state variable. This will help to display the error message to the user.
            setError(error.respose.data.message);
            
        }
        
    }

    const deleteIncome = async (id) => {
        
        const res = await axios.delete(`${BASE_URL}delete-income/:${id}`, { withCredentials: true });

        await getIncomes()
    }
    
    const totalIncome = () => {
        
        let totalIncome = 0
        incomes.forEach((income) => {
           totalIncome += income.amount
        })
        return totalIncome
    }

    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense`, expense, { withCredentials: true });
            console.log('Expense added:', response.data);
            await getExpenses(); // Refresh the expenses after adding
        } catch (error) {
            console.error('Error adding expense:', error);
            setError(error.response?.data?.message || 'Error adding expense');
        }
    };

    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-expenses`, { withCredentials: true });
            setExpenses(response.data);
            console.log('Expenses fetched:', response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
            setError(error.response?.data?.message || 'Error fetching expenses');
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-expense/${id}`, { withCredentials: true });
            console.log('Expense deleted successfully');
            
            await getExpenses(); // Refresh the expenses after deleting
        } catch (error) {
            console.error('Error deleting expense:', error);
            setError(error.response?.data?.message || 'Error deleting expense');
        }
    }

const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) =>{
        totalIncome = totalIncome + income.amount
    })

    return totalIncome;
}

    
    console.log("total:" + totalIncome());

    return (
        // Provide the global state and functions to the children components
        <GlobalContext.Provider value={{
            user,
            addUser,
            loginUser,
            logoutUser,
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            totalExpenses

        }}>
         
             {children}
        </GlobalContext.Provider>
    )


}

export const useGlobalContext = () => {

    return useContext(GlobalContext)
}
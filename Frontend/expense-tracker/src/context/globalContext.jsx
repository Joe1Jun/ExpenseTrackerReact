import React from "react"
import axios from 'axios'
import { useState } from "react";
import { useContext } from "react";

// Base URL for the API created in the backend folder already.
const BASE_URL = "http://localhost:5000/api/v1/";

// Create a context object using React.createContext()
// This will be used to provide and consume global state in the application
const GlobalContext = React.createContext()

// GlobalProvider component that wraps around the children components to provide them with global state and functions
export const GlobalProvider = ({ children }) => {
    
     // State to store incomes
    const [incomes, setIncomes] = useState([])
    // State to store expenses
    const [expenses, setExpenses] = useState([])
    // State to store errors
    const [error, setError] = useState([])
    
     // Function to add income by making a POST request to the server
     const addIncome = async (income) => {
        
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income);
        } catch (error) {
            setError(error.response.data.message);
        }
    }
    
    return (
        // Provide the global state and functions to the children components
        <GlobalContext.Provider value={'hello'}>
         
             {children}
        </GlobalContext.Provider>
    )


}

export const useGlobalContext = () => {

    return useContext(GlobalContext)
}

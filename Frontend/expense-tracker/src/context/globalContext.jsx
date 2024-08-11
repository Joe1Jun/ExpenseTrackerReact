import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';


// Base URL for the API created in the backend folder already.
const BASE_URL = "http://localhost:5000/api/v1/";

// Create a context object using React.createContext()
// This will be used to provide and consume global state in the application
const GlobalContext = createContext()

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
            const response = await axios.get(`${BASE_URL}get-incomes`)
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
        
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`);

        getIncomes()
    }
    
    const totalIncome = () => {
        
        let totalIncome = 0
        incomes.forEach((income) => {
           totalIncome += income.amount
        })
        return totalIncome
    }
    
    console.log("total:" + totalIncome());

    return (
        // Provide the global state and functions to the children components
        <GlobalContext.Provider value={{

            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome
        }}>
         
             {children}
        </GlobalContext.Provider>
    )


}

export const useGlobalContext = () => {

    return useContext(GlobalContext)
}

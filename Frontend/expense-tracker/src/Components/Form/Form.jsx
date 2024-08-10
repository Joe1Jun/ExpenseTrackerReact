import React from "react";
import { useState } from "react";
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";


// Functional component for the form to add income
function Form() {
     // Destructure addIncome function from the global context
    const { addIncome } = useGlobalContext()
    // State to manage form input values
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: ''

    })
    // Destructure individual fields from inputState for convenience
    const { title, amount, date, category, description } = inputState;
    // Function to handle input changes for text fields
    // Used name as a parameter to change the input field based on the name given in the input field of the form
    const handleInput = name => e => {
        // This creates a copy of the current state and updates the specific field.
        setInputState({...inputState, [name]: e.target.value})
    }

    // Function to handle form submission
    const handleSubmit = e => {
        // Prevent default form submission
        e.preventDefault()
        // Call addIncome function from context with form data
        addIncome(inputState)
    }
    
    return (
        // The form data is passed to the handleSubmit function on submit
        <FormStyled onSubmit={handleSubmit}>

            <div className="input-control">
                <input type="text"
                    value={title}
                    name={'title'} 
                    placeholder= "Income Title"
                    onChange={handleInput('title')}
                
                
                />
            </div>
            <div className="input-control">
                <input type="text"
                    value={amount}
                    name={'amount'} 
                    placeholder= "Income Amount"
                    onChange={handleInput('amount')}
                
                
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    name='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>

            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>

            <div className="submit-btn">
                <button>Add Income</button>
            </div>

        </FormStyled>
    )
}


const FormStyled = styled.form`
    
   display: flex;
   flex-direction: column;
   gap: 2rem;
   
   input, textarea, select{

    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }

   

   }

   .input-control{
        width: 100%;
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        &:focus, & :active{
            color: rgba(34, 34, 96, 1);
        }
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            & :hover{
                background-color: var(--color-green) !important;
            }
        }
    }








`;


export default Form;
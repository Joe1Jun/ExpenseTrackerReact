import React from "react";
import { useState } from "react";

import { useGlobalContext } from "../../context/globalContext";



function register() {
    
    // Function to add user by making a POST request to the server
    // Destructure addIncome function from the global context
    const { addUser } = useGlobalContext()

    const [inputState, setInputState] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""

    });
    
    // Destructure individual fields from inputState for convenience
    const { name, email, password, passwordConfirm} = inputState;
    const handleInput = name => e => {
        // This creates a copy of the current state and updates the specific field.
        setInputState({...inputState, [name]: e.target.value})

    }
    const handleSubmit = e => {
      // Prevent default form submission
      e.preventDefault()
      // Call addIncome function from context with form data
      addUser(inputState)
      //reset input state  of form to be empty after item is added
      setInputState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""


      })

    }


    return (

    <FormStyled onSubmit={handleSubmit}>
            <div className="login-container">
            <div className="login-form-container">
                <form className="form-container">
                        <input type="name"
                            value = {name}
                        placeholder="Name"
                        onChange={handleInput}
                        required
                        className="input"
                    
                    />
                        <input type="email"
                            value={email}
                        placeholder="Email"
                        onChange={handleInput}
                        required
                        className="input"
                    
                    />
                        <input type="password"
                            value={password}
                        placeholder="Password"
                        onChange={handleInput}
                        required
                        className="input"
                    
                    />
                        <input type="password"
                            value={passwordConfirm}
                        placeholder="Password Confirm"
                        onChange={handleInput}
                        required
                        className="input"
                    
                    />
                    <button type="submit" className="btn">
                          Sign in 
                    </button>
                </form>
            </div>
            

        </div>









    </FormStyled>
        



    )
    
    const FormStyled = styled.form`
        



    `



}



export default register
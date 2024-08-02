import React from "react";
import { useState } from "react";
import styled from 'styled-components'

function Form() {
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: ''

    })
    return (
        <FormStyled>
            <div className="input-control">
                <input type="text" />
            </div>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    








`;


export default Form;
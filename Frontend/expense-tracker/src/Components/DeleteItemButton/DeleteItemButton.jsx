import React from 'react'
import styled from 'styled-components'
import { trash } from '../../utils/Icons'

function DeleteItemButton({ onClick }) {
    return (
        <DeleteItemStyled onClick={onClick}>
            {trash}
            
        </DeleteItemStyled>
    )
}

const DeleteItemStyled = styled.button`
    outline: none;
    border: none;
    background: var(--primary-color);
    padding: 1rem;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .4s ease-in-out;

    &:hover {
        background: var(--color-delete) !important;
    }
`;

export default DeleteItemButton;

import React from 'react'
import { ButtonStyled } from './style'

export const Button = ({ handleClick, text = '' }) => (
    <ButtonStyled
        variant="contained"
        color="primary"
        onClick={handleClick}>
        {text}</ButtonStyled>
)


import React from 'react'
import { ButtonStyledUpdate } from './style'

export const ButtonUpdate = ({ handleClick, text }) => (
    <ButtonStyledUpdate
        onClick={handleClick}
    >
        {text}
    </ButtonStyledUpdate>
)


import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from './style'

export const Button = ({ handleClick, text = '' }) => (
    <ButtonStyled
        variant="contained"
        color="primary"
        onClick={handleClick}>
        {text}</ButtonStyled>
)

Button.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string
}

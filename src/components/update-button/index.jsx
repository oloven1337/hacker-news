import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyledUpdate } from './style'

export const ButtonUpdate = ({ handleClick, children }) => (
    <ButtonStyledUpdate onClick={handleClick}>
        {children}
    </ButtonStyledUpdate>
)

ButtonUpdate.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}

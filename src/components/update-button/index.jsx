import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyledUpdate } from './style'

export const ButtonUpdate = ({ handleClick, text }) => (
    <ButtonStyledUpdate
        onClick={handleClick}
    >
        {text}
    </ButtonStyledUpdate>
)

ButtonUpdate.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string
}

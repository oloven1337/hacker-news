import React from 'react'
import PropTypes from 'prop-types'

import { MainPageButtonStyled } from './style'

export const HomeButton = ({ children }) => (
    <MainPageButtonStyled>
        {children}
    </MainPageButtonStyled>
)

HomeButton.propTypes = {
    children: PropTypes.node.isRequired
}

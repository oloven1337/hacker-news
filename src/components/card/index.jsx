import React from 'react'
import PropTypes from 'prop-types'

import { CardStyled } from './style'

export const Card = ({ children }) => <CardStyled children={children}/>

Card.propTypes = {
    children: PropTypes.node.isRequired
}

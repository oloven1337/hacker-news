import React from 'react'
import { GoHome } from './style'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const HomeButton = ({ refresh, text }) => (
    <GoHome>
        {refresh
            ? <a href="/">{text}</a>
            : <Link to="/">{text}</Link>
        }
    </GoHome>
)

HomeButton.propTypes = {
    refresh: PropTypes.bool,
    text: PropTypes.string
}

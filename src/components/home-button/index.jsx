import React from 'react'
import { GoHome } from './style'
import { Link } from 'react-router-dom'

export const HomeButton = ({ refresh, text }) => (
    <GoHome>
        {refresh
            ? <a href="/">{text}</a>
            : <Link to="/">{text}</Link>
        }
    </GoHome>
)

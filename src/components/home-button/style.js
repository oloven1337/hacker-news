import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const GoHome = styled(Button)`
    a {
        text-decoration: none;
        color: white;
    }

    margin-left: auto;
    font-weight: bold;
    background-color: #c2185b;
    margin-bottom: 10px;
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
        background-color: #e91e63;
    }

    &:hover:before {
        transform: translate3d(-5px, 0, 0);
        background-color: #e91e63;
        transition: .6s;
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`

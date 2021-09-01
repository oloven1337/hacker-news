import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const NewsItem = styled.div`
    max-width: 900px;
    width: auto;
    margin: 10px auto;
    text-align: center;
    transition: .5s;
    border: 2px solid #e91e63;

    a {
        margin-left: auto;
        text-decoration: none;
    }

    &:hover {
        box-shadow: 0 7px 12px 4px rgba(34, 60, 80, 0.2);
    }
`

export const ButtonStyled = styled(Button)`
    margin-left: auto;
    font-weight: bold;
    background-color: #c2185b;

    &:hover {
        background-color: #e91e63;
    }
`

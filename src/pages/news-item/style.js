import styled from 'styled-components'
import { Button, CardActions } from '@material-ui/core'

export const ButtonStyled = styled(Button)`
    margin-left: auto;
    font-weight: bold;
    background-color: #c2185b;

    a {
        text-decoration: none;
    }

    &:hover {
        background-color: #e91e63;
    }
`
export const CardActionsStyled = styled(CardActions)`
    a {
        text-decoration: none;
    }
`

import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const ButtonStyled = styled(Button)`
    margin-left: auto;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`

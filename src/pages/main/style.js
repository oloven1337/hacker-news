import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const NewsItem = styled.div`
    max-width: 900px;
    width: auto;
    margin: 10px auto;
    text-align: center;
    transition: .5s;

    &:hover {
        box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
`

export const ButtonStyled = styled(Button)`
    margin-left: auto;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`

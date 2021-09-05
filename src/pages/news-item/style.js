import styled from 'styled-components'
import { CardActions, Typography } from '@material-ui/core'
import { ButtonStyled } from '../../components/Button'

export const CardActionsStyled = styled(CardActions)`
    a {
        text-decoration: none;
    }
`
export const GoBack = styled(ButtonStyled)`
    margin-bottom: 10px;

    &:before {
        content: '🠔';
        padding: 0 10px;
        color: white;
        font-weight: bold;
    }

    &:hover:before {
        transform: translate3d(-10px, 0, 0);

        transition: .9s;
    }
`

export const GoOver = styled(ButtonStyled)`
    width: 100%;

    &:after {
        content: "🠖";
        padding: 0 10px;
        color: white;
        font-weight: bold;
    }

    &:hover:after {
        transform: translate3d(10px, 0, 0);
        transition: .9s;
    }
`
export const TextStyled = styled(Typography)`
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`

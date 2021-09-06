import styled from 'styled-components'
import { CardActions } from '@material-ui/core'
import { ButtonStyled } from '../../components/button'

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

export const TextStyled = styled.div`
    padding: 10px 0;
    font-size: 18px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const CommentStyled = styled(TextStyled)`
    padding: 10px 0;
    font-size: 18px;
    font-weight: 500;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const TitleStyled = styled.div`
    font-size: 24px;
    border-bottom: 3px solid #c2185b;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`

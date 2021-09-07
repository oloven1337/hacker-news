import styled from 'styled-components'
import { CardActions, Button } from '@material-ui/core'

export const CardStyled = styled.div`
    max-width: 900px;
    width: auto;
    margin: 10px auto;
    text-align: left;
    transition: .5s;
    border-bottom: 2px solid #000;
    box-shadow: 0 3px 3px 3px rgba(34, 60, 80, 0.2);
    padding: 8px;

    a {
        margin-left: auto;
        text-decoration: none;
    }

    &:hover {
        box-shadow: 6px 6px 6px 6px rgba(34, 60, 80, 0.2);
    }
`

export const CardActionsStyled = styled(CardActions)`
    a {
        text-decoration: none;
    }
`
export const ButtonGoBackStyled = styled(Button)`
    margin-left: auto;
    font-weight: bold;
    background-color: #c2185b;
    text-transform: capitalize;
    margin-bottom: 10px;

    &:before {
        content: '🠔';
        padding: 0 10px;
        color: white;
        font-weight: bold;
        background-color: transparent;
    }

    &:hover {
        background-color: #e91e63;
    }

    &:hover:before {
        transform: translate3d(-10px, 0, 0);
        background-color: #e91e63;
        transition: .6s;
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`

export const ButtonGoToNewsStyled = styled(Button)`
    width: 100%;
    background-color: #e91e63;
    text-transform: capitalize;
    font-weight: bold;

    &:after {
        content: "🠖";
        padding: 0 10px;
        color: white;
        font-weight: bold;
    }

    &:hover {
        background-color: #e91e63;
    }

    &:hover:after {
        background-color: #e91e63;
        transform: translate3d(10px, 0, 0);
        transition: .6s;
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`

export const CommentStyled = styled.div`
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
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`

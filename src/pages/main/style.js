import styled from 'styled-components'
import {  Typography } from '@material-ui/core'
import { ButtonStyled } from '../../components/Button'

export const NewsItem = styled.div`
    max-width: 900px;
    width: auto;
    margin: 10px auto;
    text-align: center;
    transition: .5s;
    border-bottom: 2px solid #000;
    box-shadow: 0 3px 3px 3px rgba(34, 60, 80, 0.2);

    a {
        margin-left: auto;
        text-decoration: none;
    }

    &:hover {
        box-shadow: 6px 6px 6px 6px rgba(34, 60, 80, 0.2);
    }

`
export const ButtonStyledUpdate = styled(ButtonStyled)`
    position: fixed;
    max-width: inherit;
    right: 10px;
    bottom: 10px;
    height: 60px;
    width: 60px;
    font-size: 12px;
    opacity: .8;
    border-radius: 50%;
    border: 2px solid black;
`
export const WrapperCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

`
export const TitleStyled = styled(Typography)`
    font-size: 20px;
    font-weight: bold;
    color: #c2185b;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`
export const TextStyled = styled.h3`
    font-size: 18px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`
export const CardStyled = styled.div`
    padding: 8px;
`
export const Wrapper = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`

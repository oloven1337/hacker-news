import styled from 'styled-components'
import { Typography } from '@material-ui/core'

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
export const TextStyled = styled.div`
    padding: 10px 0;
    font-size: 18px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const Wrapper = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`

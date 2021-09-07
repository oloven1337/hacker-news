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

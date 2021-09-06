import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const ButtonStyled = styled(Button)`
  margin-left: auto;
  padding: 4px 6px;
  font-weight: bold;
  background-color: #c2185b;
  font-size: 14px;
  text-transform: capitalize;

  &:hover {
    background-color: #e91e63;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

import styled from 'styled-components'

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

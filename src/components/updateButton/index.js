import styled from 'styled-components'

import { ButtonStyled } from '../button'

export const ButtonStyledUpdate = styled(ButtonStyled)`
    position: fixed;
    max-width: inherit;
    top: 10px;
    right: -40px;
    height: 50px;
    width: 120px;
    font-size: 14px;
    opacity: .5;
    transition: .5s;
    color: white;

    &:hover {
        opacity: 1;
        right: 2px;
    }

    @media (max-width: 768px) {
        right: -24px;
        height: 30px;
        width: auto;
        font-size: 12px;
        &:hover {
            right: 2px;
        }
    }
`

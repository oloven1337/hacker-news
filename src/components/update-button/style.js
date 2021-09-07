import styled from 'styled-components'

import { Button } from '@material-ui/core'

export const ButtonStyledUpdate = styled(Button)`
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
    background-color: #c2185b;

    &:hover {
        opacity: 1;
        right: 2px;
        background-color: #c2185b;
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

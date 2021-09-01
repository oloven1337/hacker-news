import styled from 'styled-components'
import { Button, CardContent } from '@material-ui/core'

export const AuthorCommentStyled = styled.div`
    font-size: 20px;
    color: #ffeb3b;
`

export const ParagraphStyled = styled.div`
    color: white;

    & a {
        color: #45c8f1;
    }
`

export const CommentWrapper = styled.div`
    padding: 5px 10px;
    background-color: #3f51b5;
    margin: 10px;
    border-radius: 10px;
`

export const ButtonStyled = styled(Button)`
    margin-left: auto;
    padding: 5px 10px;
    font-size: 10px;
    background-color: #c2185b;
    transition: background-color .5s;

    &:hover {
        background-color: #e91e63;
    }
`

export const CardContentStyled = styled(CardContent)`
`

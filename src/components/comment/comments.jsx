import React from 'react'

import { getChildComments } from '../../__data__/actions/comments'
import { useDispatch } from 'react-redux'
import { CommentWrapper, AuthorCommentStyled, ParagraphStyled } from './style'
import { ButtonStyled } from '../Button'

export const CommentItem = ({ id = 0, by = '', kids = [], text = '', childComments }) => {
    const dispatch = useDispatch()
    const [clickPermission, setClickPermission] = React.useState(false)

    const handleClickComments = () => {
        dispatch(getChildComments(kids))
        setClickPermission(true)
    }

    return (
        <div>
            <CommentWrapper>
                <AuthorCommentStyled>
                    <h4>{by}</h4>
                </AuthorCommentStyled>
                <ParagraphStyled>
                    <p dangerouslySetInnerHTML={{ __html: text }}/>
                </ParagraphStyled>
                {kids.length !== 0 && !clickPermission
                && (<ButtonStyled
                    variant="contained"
                    color="primary"
                    onClick={handleClickComments}
                >
                    Show more
                </ButtonStyled>)}
                {childComments && childComments.map((comment) => (
                    <CommentItem key={comment.id} {...comment}/>
                ))}
            </CommentWrapper>
        </div>
    )
}
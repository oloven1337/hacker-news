import React from 'react'
import { useDispatch } from 'react-redux'

import { getChildComments } from '../../__data__/actions/comments'
import { AuthorCommentStyled, CommentWrapper, ParagraphStyled } from './comment/style'
import { Button } from '../../components/button'


export const CommentItem = ({ by = '', kids = [], text = '', childComments, deleted = false }) => {
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
                    {deleted ? <p>Sorry, comment was deleted</p> : <p dangerouslySetInnerHTML={{ __html: text }}/>}
                </ParagraphStyled>
                {kids.length !== 0 && !clickPermission
                && (<Button
                    text="Show more"
                    handleClick={handleClickComments}
                />)}
                {childComments && childComments.map((comment) => (
                    <CommentItem key={comment.id} {...comment}/>
                ))}
            </CommentWrapper>
        </div>
    )
}

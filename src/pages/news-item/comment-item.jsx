import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { getChildComments } from '../../__data__/actions/comments'
import { AuthorCommentStyled, CommentWrapper, ParagraphStyled } from './comments/style'
import { Button } from '../../components'


export const CommentItem = ({ by, kids, text, childComments, deleted }) => {
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
                {kids.length !== 0 && !clickPermission && (
                    <Button text="Show more" handleClick={handleClickComments}/>
                )}
                {childComments && childComments.map((comment) => (
                    <CommentItem key={comment.id} {...comment}/>
                ))}
            </CommentWrapper>
        </div>
    )
}

CommentItem.defaultProps = {
    by: '',
    kids: [],
    text: '',
    childComments: [],
    deleted: false
}

CommentItem.propTypes = {
    by: PropTypes.string,
    kids: PropTypes.arrayOf(PropTypes.number),
    text: PropTypes.string,
    childComments: PropTypes.arrayOf(PropTypes.shape({
        by: PropTypes.string,
        kids: PropTypes.arrayOf(PropTypes.number),
        text: PropTypes.string,
        deleted: PropTypes.bool
    })),
    deleted: PropTypes.bool
}

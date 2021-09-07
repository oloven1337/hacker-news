import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { commentsSelector, hasErrorSelector, isFetchingCommentSelector } from '../../../__data__/selectors/comments'
import { fetchComments } from '../../../__data__/actions/comments'
import { CommentItem } from '../comment-item'
import { Emoji, Loader } from '../../../components'
import emoji from '../../../assets/sad-emoji.png'

export const Comments = ({ kids = [], randomNumber }) => {
    const dispatch = useDispatch()
    const comments = useSelector(commentsSelector)
    const hasError = useSelector(hasErrorSelector)
    const isFetchingComment = useSelector(isFetchingCommentSelector)

    React.useEffect(() => {
        dispatch(fetchComments(kids))
        const intervalId = setInterval(() => {
            dispatch(fetchComments(kids))
        }, 60000)

        return () => {
            clearInterval(intervalId)
        }
    }, [dispatch, kids, randomNumber])

    if (hasError) {
        return (
            <>
                <h2>Sorry, couldn't load comments</h2>
                <Emoji src={emoji}/>
            </>
        )
    }

    if (isFetchingComment) {
        return <Loader/>
    }

    return comments.map((comment) => <CommentItem key={comment.id} {...comment}/>)
}

Comments.propTypes = {
    kids: PropTypes.arrayOf(PropTypes.number),
    randomNumber: PropTypes.number.isRequired
}

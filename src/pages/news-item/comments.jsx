import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { commentsSelector, isFetchingCommentSelector } from '../../__data__/selectors/comments'
import { fetchComments } from '../../__data__/actions/comments'
import { CommentItem } from '../../components/comment/comments'
import { Loader } from '../../components/loader'

export const Comments = ({ kids = [], state, commentsCount = 0 }) => {
    const dispatch = useDispatch()
    const comments = useSelector(commentsSelector)
    const isFetchingComment = useSelector(isFetchingCommentSelector)

    React.useEffect(() => {
        dispatch(fetchComments(kids))
        const intervalId = setInterval(() => {
            dispatch(fetchComments(kids))
        }, 60000)

        return () => {
            clearInterval(intervalId)
        }
    }, [dispatch, kids, state])
    if (isFetchingComment) {
        return <Loader/>
    }

    return comments.map((comment) => {
        return <CommentItem key={comment.id} {...comment}/>
    })
}

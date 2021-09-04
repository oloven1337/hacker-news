import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { commentsSelector } from '../../__data__/selectors/comments'
import { fetchComments } from '../../__data__/actions/comments'
import { CommentItem } from '../../components/comment/comments'

export const Comments = ({ kids = [] }) => {
    const dispatch = useDispatch()
    const comments = useSelector(commentsSelector)

    React.useEffect(() => {
        dispatch(fetchComments(kids))
    }, [dispatch, kids])

    return comments.map((comment) => <CommentItem key={comment.id} {...comment}/>)
}

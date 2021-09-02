import React from 'react'

import { getCommentsInComment, getCommentsById } from '../../__data__/actions/comments'
import { useDispatch, useSelector } from 'react-redux'
import { comments, commentsById } from '../../__data__/selectors/comments'
import { CommentWrapper, AuthorCommentStyled, ParagraphStyled, ButtonStyled } from './style'

const Comment = ({ id = 0, by = '', kids = [], text = '' }) => {
    const dispatch = useDispatch()
    const commentsByIdSelector = useSelector(commentsById)
    const [clickPermission, setClickPermission] = React.useState(false)

    React.useEffect(() => {
        dispatch(getCommentsInComment(kids))
    }, [dispatch])

    const handleClickComments = () => {
        dispatch(getCommentsInComment(kids))
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
                    ? (<ButtonStyled
                        variant="contained"
                        color="primary"
                        onClick={handleClickComments}
                    >
                        Show more
                    </ButtonStyled>)
                    : null}
                {kids.length !== 0 && clickPermission && commentsByIdSelector[1]
                    ? commentsByIdSelector.map((element, i) => (
                        <Comment key={i} {...element}/>
                    ))
                    : null
                }
            </CommentWrapper>
        </div>
    )
}

const Index = ({ kids = [] }) => {
    const dispatch = useDispatch()
    const commentsSelector = useSelector(comments)

    React.useEffect(() => {
        dispatch(getCommentsById(kids))
    }, [dispatch, kids])

    return (
        <div>
            {commentsSelector.map((comment) => {
                return <Comment key={comment.id} {...comment}/>
            })}
        </div>
    )
}

export default Index

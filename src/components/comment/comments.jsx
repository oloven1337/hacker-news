import React from 'react'

import { getChildComments } from '../../__data__/actions/comments'
import { useDispatch } from 'react-redux'
import { CommentWrapper, AuthorCommentStyled, ParagraphStyled, ButtonStyled } from './style'

export const CommentItem = ({ id = 0, by = '', kids = [], text = '', childComments }) => {
    const dispatch = useDispatch()
    const [clickPermission, setClickPermission] = React.useState(false)

    const handleClickComments = () => {
        dispatch(getChildComments(kids))
        setClickPermission(true)
    }

    // if (childComments) {
    //     return childComments.map((comment) => <CommentItem key={comment.id} {...comment}/>)
    // }

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
                {/*{kids.length !== 0 && clickPermission && commentsByIdSelector*/}
                {/*    ? commentsByIdSelector.map((element, i) => (*/}
                {/*        <Comment key={i} {...element}/>*/}
                {/*    ))*/}
                {/*    : null*/}
                {/*}*/}
                {childComments && childComments.map((comment) => (
                    <CommentItem key={comment.id} {...comment}/>
                ))}
            </CommentWrapper>
        </div>
    )
}

// export const Comment = ({ comments }) => {
//     return (
//         <div>
//             {comments.map((comment) => {
//                 return <CommentItem key={comment.id} {...comment}/>
//             })}
//         </div>
//     )
// }

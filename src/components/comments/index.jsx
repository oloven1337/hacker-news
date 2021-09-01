import React from 'react'

import { getCommentsById } from '../../__data__/actions/comments'
import { useDispatch, useSelector } from 'react-redux'
import { comments } from '../../__data__/selectors/comments'
import { CommentWrapper, AuthorCommentStyled, ParagraphStyled, ButtonStyled } from './style'

const Comment = ({ id = 0, by = '', kids = [], text = '' }) => {

    return (
        <div>
            <CommentWrapper>
                <AuthorCommentStyled>
                    <h4>{by}</h4>
                </AuthorCommentStyled>
                <ParagraphStyled>
                    <p dangerouslySetInnerHTML={{ __html: text }}/>
                </ParagraphStyled>
                {kids.length !== 0 ? (
                    <ButtonStyled
                        variant="contained"
                        color="primary">
                        Show more
                    </ButtonStyled>
                ) : null}
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

// by: "brundolf"
// id: 28376709
// kids: [28377827]
// parent: 28364866
// text: "A trick I use is to shift my mental framing of things away from this binary &quot;should&quot; and &quot;should not&quot;. There&#x27;s a mental oversimplification some of us do where we place <i>expectations</i> on the world, our product, ourselves, etc, and anything outside of those is unacceptable, intolerable, broken. This oversimplification is not sustainable in a messy, flawed world (or product (or self)).<p>Instead I reframe things as &quot;how they are&quot; and &quot;how they could be different&quot; (possibly better, but not in a way where their current state creates cognitive dissonance). Things can be made better, and better, ad infinitum. But it&#x27;s not a sprint (!) to some idealized destination; it&#x27;s a migration, in a direction.<p>Anyway, this helps me, hopefully it&#x27;s helpful to someone else."
// time: 1630474723
// type: "comment"


export default Index

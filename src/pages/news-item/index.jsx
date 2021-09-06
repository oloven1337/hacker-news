import React from 'react'
import { useHistory } from 'react-router-dom'
import { CardContent, Typography } from '@material-ui/core'
import formatRelative from 'date-fns/formatRelative'
import subDays from 'date-fns/subDays'

import { CardActionsStyled, CommentStyled, GoBack, GoOver, TitleStyled } from './style'
import { CardStyled } from '../../components/card'
import { useNewsItem } from './use-news-item'
import { Comments } from './comments'
import { TextStyled } from './style'
import { ButtonStyledUpdate } from '../../components/updateButton'
import { Loader } from '../../components/loader'
import { useSelector } from 'react-redux'
import { commentsSelector, isFetchingCommentSelector } from '../../__data__/selectors/comments'

const NewsItem = () => {
    const history = useHistory()
    const { isFetching, by, time, url, title, kids } = useNewsItem()
    const [state, setState] = React.useState(Math.random())
    const commentsCount = useSelector(commentsSelector)
    const isFetchingComment = useSelector(isFetchingCommentSelector)

    const goBackHandler = React.useCallback(
        () => {
            history.push('/')
        },
        [history]
    )

    const handleClickUpdate = () => {
        setState(Math.random())
    }

    if (isFetching) {
        return <Loader/>
    }

    return (
        <>
            <GoBack
                variant="contained"
                color="primary"
                onClick={goBackHandler}>
                Go back
            </GoBack>
            <div>
                <CardStyled>
                    <CardContent>
                        <TitleStyled variant="h6">
                            {title ? title : 'Untitled'}
                        </TitleStyled>
                        <Typography color="textSecondary">
                            {by}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {formatRelative(
                                subDays(new Date(time * 1000), 3),
                                new Date(time * 1000))}
                        </Typography>
                    </CardContent>
                    <CardActionsStyled>
                        {url
                            ? (<a href={url} target={'_blank'} rel="noreferrer">
                                <GoOver variant="contained" color="primary">
                                    Go over
                                </GoOver>
                            </a>)
                            : <TextStyled>
                                Sorry, no link to the news
                            </TextStyled>}
                    </CardActionsStyled>
                </CardStyled>
            </div>
            {isFetchingComment
                ? null
                : <CommentStyled>
                    Comments: <span>{commentsCount.length}</span>
                </CommentStyled>}
            {kids.length !== 0
                ? <Comments kids={kids} commentsCount={commentsCount.length} state={state}/>
                : <h3>no comments</h3>}
            <ButtonStyledUpdate onClick={handleClickUpdate}>update</ButtonStyledUpdate>
        </>
    )
}

export default NewsItem

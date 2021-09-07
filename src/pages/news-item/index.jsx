import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { CardContent, Typography } from '@material-ui/core'

import { ButtonUpdate, Loader, Emoji, HomeButton } from '../../components'
import { commentsSelector, isFetchingCommentSelector } from '../../__data__/selectors/comments'
import { clearComments } from '../../__data__/actions/comments'
import { clearCurrentNews } from '../../__data__/actions/news'
import { hasErrorSelector } from '../../__data__/selectors/news'
import emoji from '../../assets/sad-emoji.png'
import { formatRelativeDate } from '../../utils/format-relative-date'

import { Comments } from './comments'
import { useNewsItem } from './use-news-item'
import {
    CardStyled,
    CardActionsStyled,
    CommentStyled,
    ButtonGoBackStyled,
    ButtonGoToNewsStyled,
    TitleStyled
} from './style'

export const NewsItem = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { isFetching, by, time, url, title, kids } = useNewsItem()
    const [randomNumber, setRandomNumber] = React.useState(Math.random())
    const commentsCount = useSelector(commentsSelector)
    const hasError = useSelector(hasErrorSelector)
    const isFetchingComment = useSelector(isFetchingCommentSelector)

    const goBackHandler = React.useCallback(
        () => {
            dispatch(clearComments())
            dispatch(clearCurrentNews())
            history.push('/')
        },
        [history, dispatch]
    )

    const handleClickUpdate = () => {
        setRandomNumber(Math.random())
    }

    if (hasError) {
        return (
            <>
                <HomeButton>
                    <Link to="/">Go home</Link>
                </HomeButton>
                <h2>Something went wrong.</h2>
                <Emoji src={emoji}/>
            </>
        )
    }

    if (isFetching) {
        return <Loader/>
    }

    return (
        <>
            <ButtonGoBackStyled
                variant="contained"
                color="primary"
                onClick={goBackHandler}>
                Go back
            </ButtonGoBackStyled>
            <CardStyled>
                <CardContent>
                    <TitleStyled variant="h6">
                        {title ? title : 'Untitled'}
                    </TitleStyled>
                    <Typography color="textSecondary">
                        {by}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {formatRelativeDate(time)}
                    </Typography>
                </CardContent>
                <CardActionsStyled>
                    {url && (
                        <a href={url} target="_blank" rel="noreferrer">
                            <ButtonGoToNewsStyled variant="contained" color="primary">
                                Go over
                            </ButtonGoToNewsStyled>
                        </a>
                    )}
                </CardActionsStyled>
            </CardStyled>
            {!isFetchingComment && (
                <CommentStyled>
                    Comments: <span>{commentsCount.length}</span>
                </CommentStyled>
            )}
            {kids.length !== 0
                ? <Comments kids={kids} commentsCount={commentsCount.length} randomNumber={randomNumber}/>
                : <h3>No comments</h3>}
            <ButtonUpdate handleClick={handleClickUpdate}>Update</ButtonUpdate>
        </>
    )
}

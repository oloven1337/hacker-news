import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CardContent, Typography } from '@material-ui/core'
import formatRelative from 'date-fns/formatRelative'
import subDays from 'date-fns/subDays'

import { CardActionsStyled, CommentStyled, GoBack, GoOver, TitleStyled } from './style'
import { Card } from '../../components/card'
import { useNewsItem } from './use-news-item'
import { Index } from './comment'
import { TextStyled } from './style'
import { ButtonUpdate } from '../../components/update-button'
import { Loader } from '../../components/loader'
import { commentsSelector, isFetchingCommentSelector } from '../../__data__/selectors/comments'
import { clearComments } from '../../__data__/actions/comments'
import { clearCurrentNews } from '../../__data__/actions/news'
import { hasErrorSelector } from '../../__data__/selectors/news'
import { HomeButton } from '../../components/home-button'
import emoji from '../../assets/sad-emoji.png'
import { Emoji } from '../../components/Emoji'

const NewsItem = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { isFetching, by, time, url, title, kids } = useNewsItem()
    const [state, setState] = React.useState(Math.random())
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
        setState(Math.random())
    }

    if (hasError) {
        return (
            <>
                <HomeButton text="Go home"/>
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
            <GoBack
                variant="contained"
                color="primary"
                onClick={goBackHandler}>
                Go back
            </GoBack>
            <div>
                <Card>
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
                                <GoOver
                                    variant="contained"
                                    color="primary">
                                    Go over</GoOver>
                            </a>)
                            : <TextStyled>
                                Sorry, no link to the news
                            </TextStyled>}
                    </CardActionsStyled>
                </Card>
            </div>
            {isFetchingComment
                ? null
                : <CommentStyled>
                    Comments: <span>{commentsCount.length}</span>
                </CommentStyled>}
            {kids.length !== 0
                ? <Index kids={kids} commentsCount={commentsCount.length} state={state}/>
                : <h3>no comments</h3>}
            <ButtonUpdate handleClick={handleClickUpdate} text="Update"/>
        </>
    )
}

export default NewsItem

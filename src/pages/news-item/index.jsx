import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, CardContent, Typography } from '@material-ui/core'
import formatRelative from 'date-fns/formatRelative'
import subDays from 'date-fns/subDays'

import { CardActionsStyled, GoBack, GoOver, TextStyled } from './style'
import { useNewsItem } from './use-news-item'
import { Comments } from './comments'

const NewsItem = () => {
    const history = useHistory()
    const { isFetching, by, time, text, url, title, kids } = useNewsItem()
    const goBackHandler = React.useCallback(
        () => {
            history.push('/')
        },
        [history]
    )

    if (isFetching) {
        return <h1>Loading...</h1>
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
                        <TextStyled variant="h6">
                            {title}
                        </TextStyled>
                        <TextStyled component="h2">
                            {text}
                        </TextStyled>
                        <Typography color="textSecondary">
                            {by}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {formatRelative(
                                subDays(new Date(time * 1000), 3),
                                new Date(time * 1000))}
                        </Typography>
                        <Typography component="h2">
                            text
                        </Typography>
                    </CardContent>
                    <CardActionsStyled>
                        {url
                            ? (<a href={url} target="_blank">
                                <GoOver variant="contained" color="primary">
                                    Go over
                                </GoOver>
                            </a>)
                            : <h3>Sorry, no link to the news</h3>}
                    </CardActionsStyled>
                </Card>
            </div>
            <Comments kids={kids}/>
        </>
    )
}

export default NewsItem

import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Typography } from '@material-ui/core'
import formatRelative from 'date-fns/formatRelative'
import subDays from 'date-fns/subDays'
import ru from 'date-fns/locale/ru'

import { ButtonStyled } from './style'
import { useNewsItem } from './use-news-item'

const NewsItem = () => {
    const history = useHistory()
    const { isFetching, by, kids, parent, time, text, url } = useNewsItem()

    const goBackHandler = React.useCallback(
        () => history.push('/'),
        [history]
    )

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <ButtonStyled
                variant="contained"
                color="primary"
                onClick={goBackHandler}>
                Go back
            </ButtonStyled>

            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h6">
                            {text}
                        </Typography>
                        <Typography component="h2">
                            {kids}
                        </Typography>
                        <Typography color="textSecondary">
                            {by}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {new Date(time * 1000).toDateString()}
                            <br/>
                            {/*{formatRelative(*/}
                            {/*    subDays(new Date(time * 1000), 3),*/}
                            {/*    new Date(time * 1000), { locale: ru })}*/}
                            {/*{format(new Date(time * 1000).toTimeString())}*/}
                            {/*{new Date(time * 1000).toTimeString()}*/}
                            {formatRelative(subDays(new Date(time * 1000), 3), new Date())}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={url} target="_blank">
                            <ButtonStyled variant="contained" color="primary">
                                Read it
                            </ButtonStyled>
                        </a>
                    </CardActions>
                </Card>
            </div>

        </>

    )
}

// Должна содержать:
// ссылку на новость
// заголовок новости
// дату
// автора
// счётчик количества комментариев
// список комментариев в виде дерева

export default NewsItem

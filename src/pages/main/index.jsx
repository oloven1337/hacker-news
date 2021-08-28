import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

import { isLoading, newsList } from '../../__data__/selectors/news'
import { getNews } from '../../__data__/actions/news'

import { NewsItem, ButtonStyled } from './style'

const News = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(isLoading)
    const items = useSelector(newsList)

    React.useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    console.log(items)

    return (
        <>
            {items.map(({ id, title, score, by, time, url } = {}) => {
                return <NewsItem key={id}>
                    <Card>
                        <CardContent>
                            <ButtonStyled href={url}>
                                {title}
                            </ButtonStyled>
                            <Typography component="h2">
                                {score}
                            </Typography>
                            <Typography color="textSecondary">
                                {by}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {new Date(time * 1000).toDateString()}
                                <br/>
                                {new Date(time * 1000).toTimeString()}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonStyled variant="contained" color="primary" href={url}>
                                Read it
                            </ButtonStyled>
                        </CardActions>
                    </Card>
                </NewsItem>
            })}
        </>
    )
}

// Каждая новость содержит:
// название title
// рейтинг score
// ник автора by
// дату публикации time
// По клику на новость происходит переход на страницу новости url
// Список новостей должен автоматически обновляться раз в минуту без участия пользователя
// На странице должна быть кнопка для принудительного обновления списка новостей

News.propTypes = {}

export default News

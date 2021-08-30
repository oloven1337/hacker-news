import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatRelative, subDays } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Card, CardActions, CardContent, Typography } from '@material-ui/core'

import { isLoading, newsList } from '../../__data__/selectors/news'
import { getAll } from '../../__data__/actions/news'

import { NewsItem, ButtonStyled } from './style'
import { Link } from 'react-router-dom'

const News = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(isLoading)
    const items = useSelector(newsList)

    React.useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    console.log(items)

    return (
        <>
            {items.map(({ id, title, score, by, time, url, descendants } = {}) => {
                return <NewsItem key={id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                {title}
                            </Typography>
                            <Typography component="h2">
                                {score}
                            </Typography>
                            <Typography color="textSecondary">
                                {by}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {new Date(time * 1000).toDateString()}
                                <br/>
                                {formatRelative(
                                    subDays(new Date(time * 1000), 3),
                                    new Date(time * 1000), { locale: ru })}
                                {/*{format(new Date(time * 1000).toTimeString())}*/}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/item/${id}`}>
                                <ButtonStyled variant="contained" color="primary">
                                    Read it
                                </ButtonStyled>
                            </Link>
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

export default News

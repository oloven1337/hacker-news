import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatRelative, subDays } from 'date-fns'
import { Link } from 'react-router-dom'
import { CardActions } from '@material-ui/core'

import { isLoading, newsList } from '../../__data__/selectors/news'
import { getAll } from '../../__data__/actions/news'

import {
    NewsItem,
    ButtonStyled,
    WrapperCard,
    TextStyled,
    CardStyled,
    TitleStyled,
    ButtonStyledUpdate,
    Wrapper
} from './style'

const News = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(isLoading)
    const items = useSelector(newsList)

    React.useEffect(() => {
        // const intervalId = setInterval(() => {
        //     dispatch(getAll())
        // }, 10000)
        //
        dispatch(getAll())
        //
        // intervalRef.current = intervalId
        // return () => clearInterval(intervalRef.current)
    }, [dispatch])

    const handleClickUpdate = () => {
        dispatch(getAll())
    }

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    return (
        <Wrapper>
            {items.map(({ id, title, score, by, time, url, descendants } = {}) => {
                return <NewsItem key={id}>
                    <CardStyled>
                        <TitleStyled>
                            {title}
                        </TitleStyled>
                        <WrapperCard>
                            <TextStyled variant="h6">
                                <strong>Rating:</strong> {score}
                            </TextStyled>
                            <TextStyled>
                                <strong>By:</strong> {by}
                            </TextStyled>
                            <TextStyled variant="body2">
                                <strong>Date:</strong>
                                {formatRelative(
                                    subDays(new Date(time * 1000), 3),
                                    new Date(time * 1000))}
                            </TextStyled>
                            <CardActions>
                                <Link to={`/item/${id}`}>
                                    <ButtonStyled variant="contained" color="primary">
                                        Read it
                                    </ButtonStyled>
                                </Link>
                            </CardActions>
                        </WrapperCard>

                    </CardStyled>
                </NewsItem>
            })}
            <ButtonStyledUpdate variant="contained" color="primary" onClick={handleClickUpdate}>Update</ButtonStyledUpdate>
        </Wrapper>
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

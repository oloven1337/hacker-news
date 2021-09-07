import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatRelative, subDays } from 'date-fns'
import { Link } from 'react-router-dom'
import { CardActions } from '@material-ui/core'

import { isLoading, newsList } from '../../__data__/selectors/news'
import { getAll } from '../../__data__/actions/news'
import {
    WrapperCard,
    TextStyled,
    TitleStyled,
    Wrapper
} from './style'
import { Button } from '../../components/button'
import { Card } from '../../components/card'
import { ButtonUpdate } from '../../components/update-button'
import { Loader } from '../../components/loader'

const News = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(isLoading)
    const items = useSelector(newsList)
    const [reset, setReset] = React.useState(Math.random())
    React.useEffect(() => {
        const intervalId = setInterval(() => dispatch(getAll()), 60000)

        dispatch(getAll())
        return () => {
            clearInterval(intervalId)
        }
    }, [dispatch, reset])

    const handleClickUpdate = () => {
        setReset(Math.random())
    }

    if (isFetching) {
        return <Loader/>
    }

    return (
        <Wrapper>
            {items.map(({ id, title, score, by, time } = {}) => {
                return <Card key={id}>
                    <TitleStyled>
                        {title}
                    </TitleStyled>
                    <WrapperCard>
                        <TextStyled>
                            <strong>Rating:</strong> {score}
                        </TextStyled>
                        <TextStyled>
                            <strong>By:</strong> {by}
                        </TextStyled>
                        <TextStyled>
                            <strong>Date:</strong>
                            {formatRelative(
                                subDays(new Date(time * 1000), 3),
                                new Date(time * 1000))}
                        </TextStyled>
                        <CardActions>
                            <Link to={`/item/${id}`}>
                                <Button text="read it">
                                    Read it
                                </Button>
                            </Link>
                        </CardActions>
                    </WrapperCard>
                </Card>
            })}
            <ButtonUpdate text="Update" handleClick={handleClickUpdate}/>
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

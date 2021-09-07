import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CardActions } from '@material-ui/core'

import { isLoading, newsList } from '../../__data__/selectors/news'
import { getAll } from '../../__data__/actions/news'
import { Button, ButtonUpdate, Loader } from '../../components'
import { formatRelativeDate } from '../../utils/format-relative-date'

import {
    WrapperCard,
    TextStyled,
    TitleStyled,
    Wrapper,
    CardStyled
} from './style'


export const News = () => {
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
            {items.map(({ id, title, score, by, time } = {}) => (
                <CardStyled key={id}>
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
                            {formatRelativeDate(time)}
                        </TextStyled>
                        <CardActions>
                            <Link to={`/item/${id}`}>
                                <Button text="read it">Read it</Button>
                            </Link>
                        </CardActions>
                    </WrapperCard>
                </CardStyled>
            ))}
            <ButtonUpdate handleClick={handleClickUpdate}>
                Update
            </ButtonUpdate>
        </Wrapper>
    )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { getNewsById } from '../../__data__/actions/news'

import { ButtonStyled } from './style'


const NewsItem = () => {
    const dispatch = useDispatch()
    const { id = '' } = useParams()
    const history = useHistory()

    React.useEffect(() => {
        dispatch(getNewsById(id))
    }, [id, dispatch])

    const goBackHandler = () => history.push('/')

    return (
        <>
            <ButtonStyled
                variant="contained"
                color="primary"
                onClick={goBackHandler}>
                Go back
            </ButtonStyled>
            <h1>{id}</h1>
        </>

    )
}

export default NewsItem

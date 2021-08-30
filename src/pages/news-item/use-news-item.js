import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { currentNews, isLoading } from '../../__data__/selectors/news'
import { getNewsById } from '../../__data__/actions/news'

export function useNewsItem() {
    const dispatch = useDispatch()
    const { id = '' } = useParams()
    const isFetching = useSelector(isLoading)
    const { by = '', kids = [], parent, time = 0, text = '', url = '' } = useSelector(currentNews)

    React.useEffect(() => {
        dispatch(getNewsById(id))
    }, [id, dispatch])

    return {
        isFetching,
        by,
        kids,
        parent,
        time,
        text,
        url
    }
}

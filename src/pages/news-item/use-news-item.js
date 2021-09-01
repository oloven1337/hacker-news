import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { currentNews, isLoading } from '../../__data__/selectors/news'
import { getNewsById } from '../../__data__/actions/news'

export function useNewsItem() {
    const dispatch = useDispatch()
    const { id = '' } = useParams()
    const isFetching = useSelector(isLoading)
    const { by = '', time = 0, text = '', url = '', title = '', kids = [] } = useSelector(currentNews)

    React.useEffect(() => {
        dispatch(getNewsById(id))
    }, [id, dispatch])

    return {
        isFetching,
        title,
        by,
        time,
        text,
        url,
        kids
    }
}

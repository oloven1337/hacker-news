import * as types from '../action-types'
import axios from '../axios'

export const clearCurrentNews = () => ({ type: types.CLEAR_CURRENT_NEWS })

export const getNewsById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_CURRENT_NEWS_REQUEST
        })

        const { data } = await axios({
            method: 'GET',
            url: `/item/${id}.json?print=pretty`
        })

        dispatch({
            type: types.FETCH_CURRENT_NEWS_SUCCESS,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: types.FETCH_CURRENT_NEWS_ERROR
        })
    }
}

export const getAll = () => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_NEWS_REQUEST
        })

        const { data } = await axios({
            method: 'GET',
            url: '/newstories.json'
        })

        const promises = data
            .slice(0, 100)
            .map(id => (
                axios({
                    method: 'GET',
                    url: `/item/${id}.json?print=pretty`
                })
            ))

        const news = await Promise.all(promises)
        const newsData = news.map(({ data }) => data).filter(item => !!item)

        dispatch({
            type: types.FETCH_NEWS_SUCCESS,
            payload: newsData
        })

    } catch (e) {
        dispatch({
            type: types.FETCH_NEWS_ERROR
        })
    }
}

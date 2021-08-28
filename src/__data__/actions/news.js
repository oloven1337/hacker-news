import * as types from '../action-types'
import axios from '../axios'

export const getNews = () => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_USERS_REQUEST
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
        const newsData = news.map(({ data }) => data)

        dispatch({
            type: types.FETCH_USERS_SUCCESS,
            payload: newsData
        })

    } catch (e) {
        dispatch({
            type: types.FETCH_USERS_ERROR
        })
    }
}

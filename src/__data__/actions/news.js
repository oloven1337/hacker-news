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

        // const { data } = await axios({
        //     method: 'GET',
        //     url: '/newstories.json'
        // })
        //
        // const promises = data
        //     .slice(0, 100)
        //     .map(id => (
        //         axios({
        //             method: 'GET',
        //             url: `/item/${id}.json?print=pretty`
        //         })
        //     ))
        //
        // const news = await Promise.all(promises)
        // const newsData = news.map(({ data }) => data)


        dispatch({
            type: types.FETCH_NEWS_SUCCESS,
            payload: [
                {
                    by: 'SerCe',
                    descendants: 0,
                    id: 28441890,
                    score: 1,
                    time: 1630998842,
                    title: 'Testing the Performance of ClickHouse',
                    type: 'story'

                },
                {
                    by: 'giuliomagnifico',
                    descendants: 7,
                    id: 28441712,
                    kids: [28442014, 28442001, 28441935, 28442434, 28442031],
                    score: 13,
                    time: 1630997233,
                    title: 'Tesla’s Fatal Error: Defensive Driving',
                    type: 'story',
                    url: 'https://www.eetimes.com/teslas-fatal-error-defensive-driving/'
                }
            ]
        })

    } catch (e) {
        dispatch({
            type: types.FETCH_NEWS_ERROR
        })
    }
}

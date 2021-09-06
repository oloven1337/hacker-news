import * as types from '../action-types'
import axios from '../axios'

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
                    by: 'samstave',
                    descendants: 3,
                    id: 2839902,
                    kids: [28395128, 28394667, 28394426],
                    score: 7,
                    time: 1630601573,
                    title: 'Fake SSDs being sold by Amazon – Make sure you check for CHIPS',
                    type: 'story'
                },
                {
                    by: 'samstave',
                    descendants: 3,
                    id: 28394402,
                    kids: [28395128, 28394667, 28394426],
                    score: 104,
                    time: 1630601573,
                    title: 'Fake SSDs being sold by Amazon – Make sure you check for CHIPS',
                    type: 'story'
                }
            ]
        })

    } catch (e) {
        dispatch({
            type: types.FETCH_NEWS_ERROR
        })
    }
}

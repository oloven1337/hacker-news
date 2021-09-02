import * as types from '../action-types'
import axios from '../axios'

export const getCommentsInComment = (ids) => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_COMMENTS_BY_ID_REQUEST
        })

        // const { data } = await axios({
        //     method: 'GET',
        //     url: `/item/${ids}.json?print=pretty`
        // })

        const promises = ids
            .map(id => (
                axios({
                    method: 'GET',
                    url: `/item/${id}.json?print=pretty`
                })
            ))

        const comments = await Promise.all(promises)
        const commentsData = comments.map(({ data }) => data)

        // const rnd = Math.round(Math.random() * 1000)

        dispatch({
            type: types.FETCH_COMMENTS_BY_ID_SUCCESS,
            payload: commentsData
            // payload: { id: commentsData.id, commentsData }
            // payload: { rnd, commentsData }
        })
    } catch (e) {
        dispatch({
            type: types.FETCH_COMMENTS_BY_ID_ERROR
        })
    }
}

export const getCommentsById = (ids) => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_CURRENT_COMMENTS_REQUEST
        })

        const promises = ids
            .map(id => (
                axios({
                    method: 'GET',
                    url: `/item/${id}.json?print=pretty`
                })
            ))

        const comments = await Promise.all(promises)
        const commentsData = comments.map(({ data }) => data)

        dispatch({
            type: types.FETCH_CURRENT_COMMENTS_SUCCESS,
            payload: commentsData
        })
    } catch (e) {
        dispatch({
            type: types.FETCH_CURRENT_COMMENTS_ERROR
        })
    }
}

import * as types from '../action-types'
import axios from '../axios'

// export const clearComments = () => {
//     console.log('clearComments')
//     return { type: types.CLEAR_COMMENTS }
// }

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

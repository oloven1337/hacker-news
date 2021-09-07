import * as types from '../action-types'
import axios from '../axios'

export const clearComments = () => ({ type: types.CLEAR_COMMENTS })

const getComments = async (kids) => {
    const promises = kids
        .map(id => (
            axios({
                method: 'GET',
                url: `/item/${id}.json?print=pretty`
            })
        ))
    const comments = await Promise.all(promises)
    return comments.map(({ data }) => data)
}

export const getChildComments = (kids) => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_CHILD_COMMENTS_REQUEST
        })

        const childComments = await getComments(kids)

        dispatch({
            type: types.FETCH_CHILD_COMMENTS_SUCCESS,
            payload: childComments
        })
    } catch (e) {
        dispatch({
            type: types.FETCH_CHILD_COMMENTS_ERROR
        })
    }
}

export const fetchComments = (kids) => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_COMMENTS_REQUEST
        })

        const commentsData = await getComments(kids)

        dispatch({
            type: types.FETCH_COMMENTS_SUCCESS,
            payload: commentsData
        })
    } catch (e) {
        dispatch({
            type: types.FETCH_COMMENTS_ERROR
        })
    }
}

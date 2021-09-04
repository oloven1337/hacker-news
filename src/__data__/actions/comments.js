import * as types from '../action-types'
import axios from '../axios'

// function findComment(id, item = {}) {
//     if (id === item.id) {
//         return item
//     }
//
//     return findComment(id, item.children)
// }

// const request = async (comment) => {
//     if (comment.kids) {
//         const promises = comment.kids.map(id => (
//             axios({
//                 method: 'GET',
//                 url: `/item/${id}.json?print=pretty`
//             })
//         ))
//         const children = await Promise.all(promises)
//         comment.children = children.map(({ data }) => data)
//         await request(comment)
//     }
//     return comment
// }

export const getChildComments = (kids) => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_CHILD_COMMENTS_REQUEST
        })

        const promises = kids
            .map(id => (
                axios({
                    method: 'GET',
                    url: `/item/${id}.json?print=pretty`
                })
            ))
        const comments = await Promise.all(promises)
        const childComments = comments.map(({ data }) => data)
        console.log(childComments)
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

        const promises = kids
            .map(id => (
                axios({
                    method: 'GET',
                    url: `/item/${id}.json?print=pretty`
                })
            ))

        const comments = await Promise.all(promises)
        const commentsData = comments.map(({ data }) => data)

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

import * as types from '../action-types'

const initialState = {
    comments: [],
    isFetching: false,
    hasError: false
}

function putChildComments(comments, childComments) {
    const newComments = Object.assign([], comments)

    for (const comment of comments) {
        if (comment.childComments) {
            putChildComments(comment.childComments, childComments)
        }

        if (childComments.some(item => item.parent === comment.id)) {
            comment.childComments = childComments
        }
    }

    return newComments
}

export default function comments(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_COMMENTS_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCH_COMMENTS_SUCCESS: {
            return {
                ...state,
                comments: action.payload,
                isFetching: false
            }
        }
        case types.FETCH_COMMENTS_ERROR: {
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        }
        case types.FETCH_CHILD_COMMENTS_REQUEST: {
            return {
                ...state
                // isFetching: true
            }
        }
        case types.FETCH_CHILD_COMMENTS_SUCCESS: {
            const prevComments = putChildComments(state.comments, action.payload)
            console.log(prevComments === state.comments)
            return {
                ...state,
                comments: putChildComments(state.comments, action.payload)
                // isFetching: false
            }
        }
        case types.FETCH_CHILD_COMMENTS_ERROR: {
            return {
                ...state,
                // isFetching: false,
                hasError: true
            }
        }

        default: {
            return state
        }
    }
}

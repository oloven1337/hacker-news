import * as types from '../action-types'

const initialState = {
    comments: [],
    isFetching: false,
    hasError: false
}

export default function comments(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_CURRENT_COMMENTS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                comments: []
            }
        }
        case types.FETCH_CURRENT_COMMENTS_SUCCESS: {
            return {
                ...state,
                comments: [...state.comments, ...action.payload],
                isFetching: false
            }
        }
        case types.FETCH_CURRENT_COMMENTS_ERROR: {
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        }

        default: {
            return state
        }
    }
}

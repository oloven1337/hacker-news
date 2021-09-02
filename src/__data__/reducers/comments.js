import * as types from '../action-types'

const initialState = {
    comments: [],
    commentsById: [],
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

        case types.FETCH_COMMENTS_BY_ID_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCH_COMMENTS_BY_ID_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                commentsById: [...state.commentsById, ...action.payload]
                // commentsById: { id: action.payload.id, values: [...state.commentsById, ...action.payload] }
                // commentsById: action.payload
            }
        }
        case types.FETCH_COMMENTS_BY_ID_ERROR: {
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

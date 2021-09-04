import * as types from '../action-types'

const initialState = {
    items: [],
    isFetching: false,
    hasError: false,
    currentNews: {}
}

export default function news(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_NEWS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                items: []
            }
        }
        case types.FETCH_NEWS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                items: action.payload
            }
        }
        case types.FETCH_NEWS_ERROR: {
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        }

        case types.FETCH_CURRENT_NEWS_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCH_CURRENT_NEWS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                currentNews: action.payload
            }
        }
        case types.FETCH_CURRENT_NEWS_ERROR: {
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


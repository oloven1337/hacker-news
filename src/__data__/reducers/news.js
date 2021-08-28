import * as types from '../action-types'

const initialState = {
    items: [],
    isFetching: false,
    hasError: false
}

export default function news(state = initialState, action) {
    switch (action.type) {
        case types.SET_COUNT: {
            return {
                ...state,
                count: action.payload
            }
        }
        case types.FETCH_USERS_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCH_USERS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                items: action.payload
            }
        }
        case types.FETCH_USERS_ERROR: {
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        }
        default : {
            return state
        }
    }
}


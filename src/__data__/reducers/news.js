import * as types from '../action-types';

const initialState = {
    items: [],
    isFetching: true,
    count: 0
}

export default function news(state = initialState, action) {
    switch (action.type) {
        case types.SET_COUNT: {
            return {
                ...state,
                count: action.payload
            }
        }
        default : {
            return state
        }
    }
}


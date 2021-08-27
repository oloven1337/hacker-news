import * as types from '../action-types'

export const setCount = (count) => (dispatch) => {
    dispatch({
        type:types.SET_COUNT,
        payload: count
    })
}

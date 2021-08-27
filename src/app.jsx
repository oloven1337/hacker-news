import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCount } from './__data__/actions/news'
import { counterValue } from './__data__/selectors/news'

export const App = () => {
    const dispatch = useDispatch()
    const count = useSelector(counterValue)

    const onCountCLick = () => {
        dispatch(setCount(5))
    }

    return (
        <div>
            <button onClick={() => onCountCLick()}>count</button>
            <div>{count}</div>
        </div>
    )
}

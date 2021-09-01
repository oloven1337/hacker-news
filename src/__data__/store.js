import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import news from './reducers/news'
import comments from './reducers/comments'

const rootReducer = combineReducers({
    news,
    comments
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

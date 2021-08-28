import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { StylesProvider } from '@material-ui/core/styles'

import { store } from './__data__/store'
import { App } from './app'

ReactDOM.render(
    <Provider store={store}>
        <StylesProvider injectFirst>
                <App/>
        </StylesProvider>
    </Provider>,
    document.getElementById('root')
)

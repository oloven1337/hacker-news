import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import News from './pages/main'

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={News} />
            <Route path="/:id" render={() => <h1>Item</h1>} />
        </Switch>
    </BrowserRouter>
)

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import News from './pages/main'
import NewsItem from './pages/news-item/'

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={News}/>
            <Route path="/:id" component={NewsItem}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

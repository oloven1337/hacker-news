import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import News from './pages/main'
import NewsItem from './pages/news-item/'
import NotFound from './pages/not-found'
import Header from './components/header/header'

export const App = () => (
    <>
        <Header/>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={News}/>
                <Route path="/item/:id" exact component={NewsItem}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </>
)

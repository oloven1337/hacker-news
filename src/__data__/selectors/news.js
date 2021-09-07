import { createSelector } from 'reselect'

export const isLoading = state => state.news.isFetching
export const news = state => state.news.items
export const currentNews = state => state.news.currentNews
export const hasErrorSelector = state => state.news.hasError

export const newsList = createSelector(
    news,
    (items) => items.sort((a, b) => b?.time - a?.time)
)

import { createSelector } from 'reselect'

export const isLoading = state => state.news.isFetching
export const news = state => state.news.items || []

export const newsList = createSelector(
    news,
    (items) => items.sort((a, b) => b.time - a.time)
)

import { createSelector } from 'reselect'

export const isLoading = state => state.news.isFetching
export const newsList = state => {
    const items = state.news.items

    return items.sort((a, b) => b.time - a.time)
}

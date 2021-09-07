import formatRelative from 'date-fns/formatRelative'
import subDays from 'date-fns/subDays'

export const formatRelativeDate = (time) => formatRelative(
    subDays(new Date(time * 1000), 3),
    new Date(time * 1000)
)

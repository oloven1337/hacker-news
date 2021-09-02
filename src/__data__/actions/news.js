import * as types from '../action-types'
import axios from '../axios'

export const getNewsById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_CURRENT_NEWS_REQUEST
        })

        const { data } = await axios({
            method: 'GET',
            url: `/item/${id}.json?print=pretty`
        })

        dispatch({
            type: types.FETCH_CURRENT_NEWS_SUCCESS,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: types.FETCH_CURRENT_NEWS_ERROR
        })
    }
}

export const getAll = () => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_NEWS_REQUEST
        })

        // const { data } = await axios({
        //     method: 'GET',
        //     url: '/newstories.json'
        // })
        //
        // const promises = data
        //     .slice(0, 100)
        //     .map(id => (
        //         axios({
        //             method: 'GET',
        //             url: `/item/${id}.json?print=pretty`
        //         })
        //     ))
        //
        // const news = await Promise.all(promises)
        // const newsData = news.map(({ data }) => data)

        // console.log(newsData)

        dispatch({
            type: types.FETCH_NEWS_SUCCESS,
            payload: [
                {
                    'by': 'dnetesn',
                    'descendants': 0,
                    'id': 28364866,
                    'score': 3,
                    'time': 1630153327,
                    'title': 'You May Have More Friends Than Your Friends Do',
                    'type': 'story',
                    'url': 'https://nautil.us/blog/why-you-may-have-more-friends-than-your-friends-do',
                    kids: [
                        2922097,
                        2922429,
                        2924562
                    ]
                },
                {
                    'by': 'dasfasfnetesn',
                    'descendants': 0,
                    'id': 28337481,
                    'score': 3,
                    'time': 1630153310,
                    'title': 'You May Have asfafMore Friends Than Your Friends Do',
                    'type': 'story',
                    'url': 'https://nautil.us/blog/why-you-may-have-more-friends-than-your-friends-do'
                }
            ]
        })

    } catch (e) {
        dispatch({
            type: types.FETCH_NEWS_ERROR
        })
    }
}




import { GET_ARTICLE_DETAIL } from '../actions/articleDetail';

export default function articleDetail(state = {}, action) {
    switch(action.type) {
        case GET_ARTICLE_DETAIL:
            let newState = action.data
            return {
                ...state,
                detail: JSON.parse(JSON.stringify(newState))
            }
        default:
            return state
    }
}
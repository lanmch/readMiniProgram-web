import { GET_RANK_LIST } from '../actions/rankList';

export default function rankList(state = {}, action) {
    switch(action.type) {
        case GET_RANK_LIST:
            let newState = action.data
            return {
                ...state,
                list: JSON.parse(JSON.stringify(newState))
            }
        default:
            return state
    }
}
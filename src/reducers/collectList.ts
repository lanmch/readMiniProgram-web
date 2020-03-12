import { GET_COLLECT_LIST } from '../actions/collectList';

export default function collectList(state = {}, action) {
    switch(action.type) {
        case GET_COLLECT_LIST:
            let newState = action.data
            return {
                ...state,
                list: JSON.parse(JSON.stringify(newState))
            }
        default:
            return state
    }
}
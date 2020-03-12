
import { GET_VIEW_HISTORY } from '../actions/viewHistory';

export default function viewHistory(state = {}, action) {
    switch(action.type) {
        case GET_VIEW_HISTORY:
            let newState = action.data
            return {
                ...state,
                list: JSON.parse(JSON.stringify(newState))
            }
        default:
            return state
    }
}